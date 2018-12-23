const express = require("express")
const router = express.Router()

// load query
const updateTargetClientsDetails = require("../../database/queries/editProfile/updateTargetClients")

router.post("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[3]
  updateTargetClientsDetails(profileID, req.body)
    .then(() => {
      res.status(200)
      res.send()
    })
    .catch(() => {
      res.status(500)
      res.send(createError(500, "Error updating target clients details"))
    })
})

module.exports = router
