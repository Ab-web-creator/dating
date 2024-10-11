const bcrypt = require('bcrypt')
const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })
const findRole = require('../utils/findRole.js')
const Relationship = require('../models/relationshipModel.js')

// it is used by fellowship and client to send invitation to the user
const handleInvitation = asyncHandler(async (req, res) => {
  try {

    // initiatorId is the id of the user who is sending the invitation
    // the rest of the data is the data of the user who is being invited
    const { initiatorId, role, email, whatsapp } = req.body
    console.log('initiatorId', initiatorId)
    console.log('role', role)
    console.log('email', email)


    if (!email && !whatsapp) {
      return res.status(400).send('Email and whatsapp are missing.')
    }

    // find the user who is sending the invitation
    const foundInitiator = await User.findOne({ _id: initiatorId })

    // if the user who is sending the invitation is not found, then the invitation should be rejected
    if (!foundInitiator) {
      console.log("first error")
      return res.sendStatus(401)
    }

    // if the user who is sending the invitation is not a mentor, admin, coach or encourager, then the invitation should be rejected
    const roles = Object.values(foundInitiator.role).filter(Boolean)


    if (![1111, 3333, 4444, 5555].some(role => roles.includes(role))) {
      console.log("gets here?")
      return res.sendStatus(401)
    }

    const givenRole = findRole(role)

    const invitedUser = await User.create({
      email,
      whatsapp,
      role: givenRole,
      signupCompletion: 1
    })

    if (email) {
      // if role equals anything, but admin, then the URL should be BASE_URL_FELLOWSHIP => https://www.fellowship.com/sign-up/invitedUser._id
      // and for admin it is => BASE_URL_ADMIN => https://www.thegreat.wayoflove.online/sign-up/invitedUser._id

      // if we are working on development stage, 
      // the it is localhost:3000 for both
      let invitationURL
      if (process.env.STAGE === 'development') {
        invitationURL = `${process.env.BASE_URL_DEV}/signup/${invitedUser._id}`
      } else {
        if (role === 'admin') {
          invitationURL = `${process.env.BASE_URL_ADMIN}/signup/${invitedUser._id}`
        } else {
          invitationURL = `${process.env.BASE_URL_FELLOWSHIP}/signup/${invitedUser._id}`
        }
      }

      const mailOptions = {
        from: `${process.env.EMAIL_ADDRESS}`,
        to: invitedUser.email,
        subject: 'Invitation to create an account',
        html: `<div style="max-width: 500px; margin: 0 auto;">
        <h1 style="color: #777;">The Way of Love</h1>
        <p> Dear candidate, 

        You are cordially invited to join our project, assuming the pivotal role of ${role}. Your expertise and contributions are highly anticipated, and we are thrilled to welcome you aboard our team. </p>
        
        <p>  To initiate your involvement, please proceed by clicking the link provided below to complete your registration. Upon doing so, you will be prompted to create a username and password. Subsequently, you will be navigated to the Profile Edit page where you must furnish the requisite details and upload two images. Please note that failure to complete this step will render your registration incomplete.
        </p>

        <p> We eagerly anticipate your participation and look forward to the valuable contributions you will bring to our project. </p>

        <p style="color: #777; padding: 0; margin: 0">
        Best regards,
        Project Manager: 
        Abdusami Rahim </p>

        <a a href="${invitationURL}" style="display: inline-block; margin-top: 20px; margin-bottom: 20px; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Click here</a>

        <p style="color: #777; padding: 0; margin: 0">This link is active for the next 48 hours. If you can not find time to sign up soon, ask for a new link.</p>
      </div>`,
      }

      var transporter = nodemailer.createTransport({
        host: 'smtp.transip.email',
        port: 465,
        secure: true,
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`
        }
      })

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("email invitation error", error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })

      if (foundInitiator.role.Admin) {
        res.json(invitedUser)
      } else {
        // we create a relationship between the initiator and the invited user as a mentor and a student
        // so that the invited user/student sees only the resources shared by the mentor
        await Relationship.create({
          teacher: foundInitiator._id,
          learner: invitedUser._id
        })
        res.json(invitedUser)
      }
    }



  } catch (error) {
    console.log(error)
  }
})


const handleMessage = asyncHandler(async (req, res) => {
  const { recipientEmail, recipientContent,
    messageContent, senderInfo } = req.body

  if (!recipientEmail && !messageContent && !recipientContent && !senderInfo) {
    return res.status(400).send('Email and whatsapp are missing.')
  }


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abekeasian',
      pass: `${process.env.GMAIL_PASSWORD}`,
    },
  })

  var mailOptions = {
    from: 'abekeasian@gmail.com',
    to: recipientEmail,
    subject: 'Important! Please respond in time!',
    html: `<div style="padding: 0px; background-color: #fff;  ">
        <p > ${recipientContent}</p>
        <p> ${messageContent} </p>
        <p style="padding: 0; margin: 0"> 
        With respect, </p>
        <p style="padding: 0; margin: 0">
        ${senderInfo} </p>
      </div>`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email is sent.')
    }
  })


  // if (whatsapp) {
  //   console.log('whatsapp exists')
  // }

  res.json(recipientEmail)
})

module.exports = { handleInvitation, handleMessage }
