const express = require("express")
const router = express.Router()

const registerUser = require("../../database/queries/registerUser")

const ProfileQuestion = require("../../database/models/ProfileQuestion")

router.post("/", async (req, res) => {
  console.log(req.body)
  // create user object
  const { name, email, phone, password } = req.body

  // register new user
  let profleAnswers = {}
  // create profile object
  for (const key in req.body) {
    if (key !== "name" && key !== "email" && key !== "phone" && key !== "password") {
      profleAnswers[key] = req.body[key]
    }
  }

  const newUser = await registerUser(name, email, phone, password).catch(err => console.log(err))
})

module.exports = router
