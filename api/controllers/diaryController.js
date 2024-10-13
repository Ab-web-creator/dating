const asyncHandler = require('express-async-handler')
const Diary = require('../models/diaryModel')

const getDiary = asyncHandler(async (req, res) => {
  try {
    const { authorId, referencedId } = req.params
    console.log("authorId", authorId)
    console.log("referencedId", referencedId)

    const foundDiaries = await Diary.find({
      author: authorId,
      referenced: referencedId
    })

    console.log("foundDiaries", foundDiaries)

    res.json(foundDiaries)

  } catch (error) {
    console.log(error)
  }
})



const createDiary = asyncHandler(async (req, res) => {
  try {
    const { authorId, referencedId, content } = req.body

    await Diary.create({
      author: authorId,
      referenced: referencedId,
      content: content,
    })

    const foundDiaries = await Diary.find({
      author: authorId,
      referenced: referencedId
    })

    res.json(foundDiaries)
  } catch (error) {
    console.log(error)
  }
})

const updateDiary = asyncHandler(async (req, res) => {
  try {
    const { _id, status } = req.body.diaryNote

    await Diary.findOneAndUpdate(
      { _id },
      { status }
    )

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})


const deleteDiary = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params

    await Diary.deleteOne(
      { _id: id }
    )

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
  }
})



module.exports = { getDiary, createDiary, updateDiary, deleteDiary }