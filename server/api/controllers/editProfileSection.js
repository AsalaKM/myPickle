const express = require("express")
const router = express.Router()

const editProfileSection = require("../../database/queries/editProfile/editProfileSection")

router.get("/", (req, res) => {
  const section = req.originalUrl.split("/")[2]

  // NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user
  const profileID = req.originalUrl.split("/")[3]
  editProfileSection(section, profileID)
    .then(questions => {
      console.log("QUESTIONS", questions)
      res.status(200).json(questions)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
