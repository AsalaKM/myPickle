const express = require("express")
const router = express.Router()

const getSupportDetails = require("../../database/queries/editProfile/getSupportDetails")

router.get("/", (req, res) => {
  // NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user
  const profileID = req.originalUrl.split("/")[3]
  getSupportDetails(profileID)
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
