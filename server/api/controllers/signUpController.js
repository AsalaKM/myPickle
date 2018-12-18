// creates User and initial profile
const express = require("express")
const router = express.Router()

// load queries
const registerUser = require("../../database/queries/registerUser")
const registerProfile = require("../../database/queries/registerProfile")
const getSupportType = require("../../database/queries/getSupportType")
const getProfileAnswers = require("../../database/queries/getProfileAnswers")
const storeAnswers = require("../../database/queries/storeProfileAnswers")

router.post("/", async (req, res) => {
  // create user object
  const { name, email, phone, password } = req.body
  // get support type id (either therapist or general)
  const supportTypeID = await getSupportType(req.body).catch(err => res.status(400).json(err))
  // register a new user
  const newUser = await registerUser(name, email, phone, password).catch(err =>
    res.status(400).json(err)
  )
  // register new profile
  const newProfile = await registerProfile(supportTypeID, newUser._id, false).catch(err =>
    res.status(400).json(err)
  )
  // create profile answers object
  const profileAnswers = await getProfileAnswers(req.body)
  // store those answers in database
  const saveProfileAnswers = await storeAnswers(newProfile._id, profileAnswers)
})

module.exports = router
