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
  const newUserID = await registerUser(name, email, phone, password).catch(err =>
    res.status(400).json(err)
  )
  // register new profile
  const newProfileID = await registerProfile(supportTypeID, newUserID, false).catch(err =>
    res.status(400).json(err)
  )
  // create profile answers object
  const profileAnswers = await getProfileAnswers(req.body)
  // store those answers in database
  await storeAnswers(newProfileID, profileAnswers)

  res.status(200).send(newProfileID)
})

module.exports = router
