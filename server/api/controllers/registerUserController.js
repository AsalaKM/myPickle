const express = require("express")
const router = express.Router()

// load queries
const registerUser = require("../../database/queries/registerUser")

const registerProfile = require("../../database/queries/registerProfile")

const getSupportType = require("../../database/queries/getSupportType")

router.post("/", async (req, res) => {
  console.log("REQBODY", req.body)
  // create user object
  const { name, email, phone, password } = req.body

  const supportTypeID = await getSupportType(req.body).catch(err => console.log(err))

  const newUser = await registerUser(name, email, phone, password).catch(err => console.log(err))
  console.log("newUser", newUser)

  const newProfile = await registerProfile(supportTypeID, newUser._id, false).catch(err =>
    console.log(err)
  )

  console.log("newProfile", newProfile)
})

module.exports = router
