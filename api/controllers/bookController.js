const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')
const BookContent = require('../models/bookContentModel')
const BookSection = require('../models/bookSectionModel')
const BookChapter = require('../models/bookChapterModel')
const BookSidenote = require('../models/bookSidenoteModel')
const User = require('../models/userModel')
const mongoose = require('mongoose')
const relationship = require('../models/relationshipModel')
const Relationship = require('../models/relationshipModel')

const getBooks = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId
    console.log("userId", userId)

    const currentUser = await User.findOne({ _id: userId })
    console.log("currentUser", currentUser)

    if (currentUser.role.Mentor) {
      console.log("mentor hit")

      const foundBooks = await Book.aggregate([
        {
          $match: {
            uploadedBy: new mongoose.Types.ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: "booksections",
            let: { book: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$book", "$book"]
                  }
                }
              },
              {
                $match: {
                  prevBookSection: null
                }
              },
              {
                $graphLookup: {
                  from: "booksections",
                  startWith: "$_id",
                  connectFromField: "nextBookSection",
                  connectToField: "_id",
                  maxDepth: 2,
                  depthField: "level",
                  as: "linkedSections"
                }
              },
              {
                $project: {
                  linkedSections: {
                    $filter: {
                      input: "$linkedSections",
                      as: "section",
                      cond: { $lte: ["$$section.level", 2] }
                    }
                  }
                }
              },
              { $unwind: "$linkedSections" },
              { $sort: { "linkedSections.level": 1 } },
              { $project: { title: "$linkedSections.title", _id: 0 } },
              { $limit: 3 }
            ],
            as: 'sections',
          },
        }
      ])
      res.send(foundBooks)
    } else if (currentUser.role.Student) {
      console.log("student hit")

      // first lookup for the relationship collection where the learner is this current user
      // find out this way who is this user's teacher in that document 
      // and then find out the books that the teacher has uploaded

      const foundRelationship = await Relationship.findOne({
        learner: userId
      })

      const foundBooks = await Book.aggregate([
        {
          $match: {
            uploadedBy: new mongoose.Types.ObjectId(foundRelationship.teacher)
          }
        },
        {
          $lookup: {
            from: "booksections",
            let: { book: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$$book", "$book"]
                  }
                }
              },
              {
                $match: {
                  prevBookSection: null
                }
              },
              {
                $graphLookup: {
                  from: "booksections",
                  startWith: "$_id",
                  connectFromField: "nextBookSection",
                  connectToField: "_id",
                  maxDepth: 2,
                  depthField: "level",
                  as: "linkedSections"
                }
              },
              {
                $project: {
                  linkedSections: {
                    $filter: {
                      input: "$linkedSections",
                      as: "section",
                      cond: { $lte: ["$$section.level", 2] }
                    }
                  }
                }
              },
              { $unwind: "$linkedSections" },
              { $sort: { "linkedSections.level": 1 } },
              { $project: { title: "$linkedSections.title", _id: 0 } },
              { $limit: 3 }
            ],
            as: 'sections',
          },
        }
      ])
      res.send(foundBooks)
    } else {
      res.send([])
    }


  } catch (error) {
    console.error("getBooks", error)
  }
})

const createBook = asyncHandler(async (req, res) => {
  const { userId } = req.params
  const data = req.body
  let prevSectionId = null

  try {
    const createdBook = await Book.create({
      uploadedBy: userId,
      title: data.title
    })

    for (let i = 0; i < data.sections.length; i++) {
      const createdSection = await BookSection.create({
        book: createdBook._id,
        title: data.sections[i].title,
        prevBookSection: prevSectionId,
      })

      if (prevSectionId) {
        await BookSection.updateOne(
          { _id: prevSectionId },
          { $set: { nextBookSection: createdSection._id } },
        )
      }

      prevSectionId = createdSection._id

      let prevChapterId = null

      for (let j = 0; j < data.sections[i].chapters.length; j++) {
        const createdChapter = await BookChapter.create({
          title: data.sections[i].chapters[j].title,
          isMainChapter: data.sections[i].chapters[j].isMainChapter,
          prevBookChapter: prevChapterId,
          bookSection: createdSection._id,
          book: createdBook._id,
          chapterImage: data.sections[i].chapters[j].chapterImage
        })

        const createdContent = await BookContent.create({
          content: data.sections[i].chapters[j].body.content,
          bookChapter: createdChapter._id,
          bookSection: createdSection._id,
          book: createdBook._id,
        })

        for (let k = 0; k < data.sections[i].chapters[j].sidenotes.length; k++) {
          await BookSidenote.create({
            sidenoteLink: data.sections[i].chapters[j].sidenotes[k].sidenoteLink,
            sidenoteContent: data.sections[i].chapters[j].sidenotes[k].sidenoteContent,
            bookContent: createdContent._id,
            bookChapter: createdChapter._id,
            bookSection: createdSection._id,
            book: createdBook._id,
          })
        }

        if (prevChapterId) {
          await BookChapter.updateOne(
            { _id: prevChapterId },
            { $set: { nextBookChapter: createdChapter._id } }
          )
        }
        prevChapterId = createdChapter._id
      }
      if (data.sections[i].chapters.length > 0) {
        await BookChapter.updateOne(
          { _id: prevChapterId },
          { $set: { nextBookChapter: null } })
      }
    }

    if (data.sections.length > 0) {
      await BookSection.updateOne(
        { _id: prevSectionId },
        { $set: { nextBookSection: null } },
      )
    }

    console.log("book hit", userId)
    console.log("data", data)
    res.json({ createdBookId: createdBook._id })
  } catch (error) {
    console.error(error)
  }
})

const getBookSections = asyncHandler(async (req, res) => {
  try {
    const bookId = new mongoose.Types.ObjectId(req.params.id)

    const data = await Book.aggregate([
      {
        $match: {
          _id: bookId
        }
      },
      {
        $lookup: {
          from: "booksections",
          let: { book: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$book", "$book"]
                }
              }
            },
            {
              $match: {
                prevBookSection: null
              }
            },
            {
              $graphLookup: {
                from: "booksections",
                startWith: "$_id",
                connectFromField: "nextBookSection",
                connectToField: "_id",
                depthField: "level",
                as: "linkedSections"
              }
            },
            { $unwind: "$linkedSections" },
            { $sort: { "linkedSections.level": 1 } },
            { $project: { title: "$linkedSections.title", _id: "$linkedSections._id" } },
          ],
          as: 'sections',
        }
      }
    ])

    res.send(data)

  } catch (error) {
    console.error("getBookSections", error)
    res.status(500).send({ message: "Internal Server Error" })
  }
})

const getSectionChapters = asyncHandler(async (req, res) => {
  try {
    const sectionId = new mongoose.Types.ObjectId(req.params.id);

    const data = await BookSection.aggregate([
      {
        $match: {
          _id: sectionId
        }
      },
      {
        $lookup: {
          from: "bookchapters",
          let: { section: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$$section", "$bookSection"]
                }
              }
            },
            {
              $match: {
                prevBookChapter: null
              }
            },
            {
              $graphLookup: {
                from: "bookchapters",
                startWith: "$_id",
                connectFromField: "nextBookChapter",
                connectToField: "_id",
                depthField: "level",
                as: "linkedChapters"
              }
            },
            { $unwind: "$linkedChapters" },
            { $sort: { "linkedChapters.level": 1 } },
            { $project: { _id: "$linkedChapters._id", title: "$linkedChapters.title", isMainChapter: "$linkedChapters.isMainChapter", chapterImage: "$linkedChapters.chapterImage" } }
          ],
          as: 'chapters'
        }
      }
    ]);

    res.send(data.length > 0 ? data[0].chapters : []);
  } catch (error) {
    console.error("getSectionChapters", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const getChapterContentSidenotes = asyncHandler(async (req, res) => {
  try {
    const foundContent = await BookContent.findOne({
      bookChapter: req.params.id
    })

    const foundSidenotes = await BookSidenote.find({
      bookChapter: req.params.id
    })

    res.json({
      bookContent: foundContent,
      bookSidenotes: foundSidenotes
    })
  } catch (error) {
    console.log("getChapterContentSidenotes", error)
  }
})

const getBookChapter = asyncHandler(async (req, res) => {
  try {
    const foundChapter = await BookChapter.findOne({
      _id: req.params.id
    })

    res.json(foundChapter)
  } catch (error) {
    console.log("getBookChapter", error)
  }

})

const getBook = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params

    // const book = await Book.findById(id).lean()
    // if (!book) {
    //   res.status(404)
    //   throw new Error('Book not found')
    // }

    // const sections = await BookSection.find({ book: book._id }).lean()

    // for (const section of sections) {
    //   const chapters = await BookChapter.find({ bookSection: section._id }).lean()

    //   for (const chapter of chapters) {
    //     console.log("chapter before", chapter)
    //     chapter.body = await BookContent.findOne({ bookChapter: chapter._id }).lean()
    //     chapter.sidenotes = await BookSidenote.find({ bookChapter: chapter._id }).lean()
    //     console.log("chapter after", chapter)
    //   }

    //   section.chapters = chapters
    // }
    // book.sections = sections

    // res.json(book)


    const updatedBookToSend = await Book.findById(id).lean()

    const allSections = await BookSection.find({ book: updatedBookToSend._id }).lean()
    const orderedSections = []
    let section = allSections.find(s => !s.prevBookSection)
    while (section) {
      orderedSections.push(section)
      section = allSections.find(s => s.prevBookSection?.toString() === section._id.toString())
    }

    for (const section of orderedSections) {
      const allChapters = await BookChapter.find({ bookSection: section._id }).lean()
      const orderedChapters = []
      let chapter = allChapters.find(c => !c.prevBookChapter)
      while (chapter) {
        chapter.body = await BookContent.findOne({ bookChapter: chapter._id }).lean()
        chapter.sidenotes = await BookSidenote.find({ bookChapter: chapter._id }).lean()
        orderedChapters.push(chapter)
        chapter = allChapters.find(c => c.prevBookChapter?.toString() === chapter._id.toString())
      }
      section.chapters = orderedChapters
    }

    updatedBookToSend.sections = orderedSections

    res.json(updatedBookToSend);



  } catch (error) {
    console.log("getBook", error)
  }
})

const updateBook = asyncHandler(async (req, res) => {
  try {
    const { id: bookId, userId } = req.params // id = bookId

    const foundBook = await Book.findOne({
      _id: bookId
    })

    if (userId === foundBook.uploadedBy.toString()) {

      const book = req.body;

      const updatedBook = await Book.findOneAndUpdate({ _id: book._id }, {
        title: book.title
      })

      let prevSectionId = null
      let currentSectionId

      for (let i = 0; i < book.sections.length; i++) {
        // console.log("book.sections[i]", book.sections[i])

        const currentSection = book.sections[i]

        // if the being edited section already existed, then update it by id
        if (currentSection._id) {

          // if has the delete mark, to be deleted
          if (currentSection.delete) {

            await BookSection.findByIdAndRemove(currentSection._id)
            await BookChapter.deleteMany({
              bookSection: currentSection._id
            })
            await BookContent.deleteMany({
              bookSection: currentSection._id
            })
            await BookSidenote.deleteMany({
              bookSection: currentSection._id
            })
            continue;
          }


          const updatedSection = await BookSection.findOneAndUpdate({
            _id: currentSection._id
          }, {
            title: currentSection.title,
            prevBookSection: prevSectionId
          })
          if (prevSectionId) {
            await BookSection.updateOne(
              { _id: prevSectionId },
              { $set: { nextBookSection: updatedSection._id } }
            )
          }
          prevSectionId = updatedSection._id
          currentSectionId = updatedSection._id

        } else if (!currentSection._id) {

          if (currentSection.delete) {
            continue
          }

          const createdSection = await BookSection.create({
            book: updatedBook._id,
            title: currentSection.title,
            prevBookSection: prevSectionId
          })

          if (prevSectionId) {
            await BookSection.updateOne(
              { _id: prevSectionId },
              { $set: { nextBookSection: createdSection._id } }
            )
          }

          prevSectionId = createdSection._id
          currentSectionId = createdSection._id
        }

        let prevChapterId = null
        let currentChapterId
        let currentContentId

        for (let j = 0; j < currentSection.chapters.length; j++) {
          const currentChapter = currentSection.chapters[j]
          if (currentChapter._id) {

            // if the pre-existing in DB section is marked to be deleted
            if (currentChapter.delete) {
              await BookChapter.findByIdAndRemove(currentChapter._id)
              await BookContent.deleteOne({
                bookSection: currentChapter._id
              })
              await BookSidenote.deleteMany({
                bookSection: currentChapter._id
              })
              continue;
            }

            const updatedChapter = await BookChapter.findOneAndUpdate({
              _id: currentChapter._id
            }, {
              title: currentChapter.title,
              isMainChapter: currentChapter.isMainChapter,
              prevBookChapter: prevChapterId,
              chapterImage: currentChapter.chapterImage
            })

            const updatedContent = await BookContent.findOneAndUpdate({
              _id: currentChapter.body._id
            }, {
              content: currentChapter.body.content
            })

            if (prevChapterId) {
              await BookChapter.updateOne(
                { _id: prevChapterId },
                { $set: { nextBookChapter: updatedChapter._id } }
              )
            }

            currentChapterId = updatedChapter._id
            prevChapterId = updatedChapter._id
            currentContentId = updatedContent._id

          } else if (!currentChapter._id) {
            if (currentChapter.delete) {
              continue
            }

            const createdChapter = await BookChapter.create({
              bookSection: currentSectionId,
              title: currentChapter.title,
              isMainChapter: currentChapter.isMainChapter,
              prevBookChapter: prevChapterId,
              book: updatedBook._id,
              chapterImage: currentChapter.chapterImage
            })

            if (prevChapterId) {
              await BookChapter.updateOne(
                { _id: prevChapterId },
                { $set: { nextBookChapter: createdChapter._id } }
              )
            }

            currentChapterId = createdChapter._id
            prevChapterId = createdChapter._id

            const createdContent = await BookContent.create({
              content: currentChapter.body.content,
              bookChapter: currentChapterId,
              bookSection: currentSectionId,
              book: updatedBook._id,
            })

            currentContentId = createdContent._id
          }


          for (let k = 0; k < currentChapter.sidenotes.length; k++) {
            const currentSidenote = currentChapter.sidenotes[k]
            if (currentSidenote._id) {

              if (currentSidenote.delete) {
                await BookSidenote.deleteOne({
                  _id: currentSidenote._id
                })
                continue
              }

              await BookSidenote.findOneAndUpdate({
                _id: currentSidenote._id
              }, {
                sidenoteContent: currentSidenote.sidenoteContent
              })

            } else if (!currentSidenote._id) {
              if (currentSidenote.delete) {
                continue
              }
              await BookSidenote.create({
                sidenoteLink: currentSidenote.sidenoteLink,
                sidenoteContent: currentSidenote.sidenoteContent,
                bookContent: currentContentId,
                bookChapter: currentChapterId,
                bookSection: currentSectionId,
                book: updatedBook._id,
              })
            }
          }
        }

        if (currentSection.chapters.length > 0) {
          await BookChapter.updateOne(
            { _id: prevChapterId },
            { $set: { nextBookChapter: null } })
        }
      }

      if (book.sections.length > 0) {
        await BookSection.updateOne(
          { _id: prevSectionId },
          { $set: { nextBookSection: null } },
        )
      }

      // const updatedBookToSent = await Book.findById(bookId).lean()
      // const sections = await BookSection.find({ book: updatedBookToSent._id }).lean()

      // for (const section of sections) {
      //   const chapters = await BookChapter.find({ bookSection: section._id }).lean()

      //   for (const chapter of chapters) {
      //     chapter.body = await BookContent.findOne({ bookChapter: chapter._id }).lean()
      //     chapter.sidenotes = await BookSidenote.find({ bookChapter: chapter._id }).lean()
      //   }

      //   section.chapters = chapters
      // }
      // updatedBookToSent.sections = sections

      // res.json(updatedBookToSent)

      const updatedBookToSend = await Book.findById(bookId).lean()

      const allSections = await BookSection.find({ book: updatedBookToSend._id }).lean()
      const orderedSections = []
      let section = allSections.find(s => !s.prevBookSection)
      while (section) {
        orderedSections.push(section)
        section = allSections.find(s => s.prevBookSection?.toString() === section._id.toString())
      }

      for (const section of orderedSections) {
        const allChapters = await BookChapter.find({ bookSection: section._id }).lean()
        const orderedChapters = []
        let chapter = allChapters.find(c => !c.prevBookChapter)
        while (chapter) {
          chapter.body = await BookContent.findOne({ bookChapter: chapter._id }).lean()
          chapter.sidenotes = await BookSidenote.find({ bookChapter: chapter._id }).lean()
          orderedChapters.push(chapter)
          chapter = allChapters.find(c => c.prevBookChapter?.toString() === chapter._id.toString())
        }
        section.chapters = orderedChapters
      }

      updatedBookToSend.sections = orderedSections

      res.json(updatedBookToSend);
    } else {
      res.sendStatus(301)
    }
  } catch (error) {
    console.log("updateeBook", error)
  }
})

const deleteBook = asyncHandler(async (req, res) => {
  try {
    const { id: bookId, userId } = req.params // id = bookId

    const foundBook = await Book.findOne({
      _id: bookId
    })

    if (userId === foundBook.uploadedBy.toString()) {
      await Book.deleteOne({
        _id: bookId
      })
      await BookSection.deleteMany({
        book: bookId
      })
      await BookChapter.deleteMany({
        book: bookId
      })
      await BookContent.deleteMany({
        book: bookId
      })
      await BookSidenote.deleteMany({
        book: bookId
      })

      res.status(200).json({ message: "Success" });

    } else {
      res.sendStatus(301)
    }

  } catch (error) {
    console.log("error occured in deleteBook:", error)
  }
})


module.exports = { getBooks, getBook, createBook, updateBook, getBookSections, getSectionChapters, getBookChapter, getChapterContentSidenotes, deleteBook }