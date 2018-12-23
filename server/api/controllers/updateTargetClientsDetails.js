const express = require("express")
const router = express.Router()
// load query
const getTargetClientsDetails = require("../../database/queries/editProfile/getTargetClientsDetails")
// const updateTargetClientsDetails = require("../../database/queries/editProfile/updateTargetClients")
const updateProfileSection = require("../../database/queries/editProfile/updateProfileSection")

router.post("/", async (req, res) => {
  const profileID = req.originalUrl.split("/")[3]
  const storedAnswers = await getTargetClientsDetails(profileID)

  updateProfileSection(profileID, req.body, storedAnswers)
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
