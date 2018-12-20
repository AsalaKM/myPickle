const express = require("express")
const router = express.Router()

const getQuestions = require("../../database/queries/editProfile/getQuestions")

router.get("/", (req, res) => {
  const section = req.originalUrl.split("/")[2]
  const profileID = req.originalUrl.split("/")[3]

  // function that will feed in the section to then get the questions for that section

  getQuestions(section, profileID)
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
