const express = require("express")
const router = express.Router()

const getQuestions = require("../../database/queries/editProfile/getQuestions")

// function that will feed in the section to then get the questions for that section

router.get("/", (req, res) => {
  const section = req.originalUrl.split("/")[2]

  // NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user
  const profileID = req.originalUrl.split("/")[3]

  getQuestions(section, profileID)
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => {
      if (err.message.indexOf("Cast to ObjectId failed") !== -1) {
        res.status(404)
        res.send("Data was not found")
      } else {
        res.status(500)
        res.send("Server Error")
      }
    })
})

module.exports = router
