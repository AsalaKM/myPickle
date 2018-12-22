const express = require("express")
const router = express.Router()

const getSupportDetails = require("../../database/queries/editProfile/getSupportDetails")

router.get("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[3]
  getSupportDetails(profileID)
    .then(questions => {
      res.status(200).json(questions)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
