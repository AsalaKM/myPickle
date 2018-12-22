const express = require("express")
const router = express.Router()

const getTargetClientsDetails = require("../../database/queries/editProfile/getTargetClientsDetails")

router.get("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[3]
  getTargetClientsDetails(profileID)
    .then(answers => {
      res.status(200).json(answers)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
