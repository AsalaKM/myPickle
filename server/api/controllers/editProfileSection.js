const express = require("express")
const router = express.Router()
const passport = require("passport")

const editProfileSection = require("../../database/queries/editProfile/editProfileSection")

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  const section = req.originalUrl.split("/")[2]

  // NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user
  // const profileID = req.originalUrl.split("/")[3]

  const profileID = req.user.profileId

  editProfileSection(section, profileID)
    .then(questions => {
      const response = { questions: questions, profileId: profileID }
      console.log("QUESTIONS", response)
      res.status(200).json(response)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
