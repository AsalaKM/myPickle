const express = require("express")
const router = express.Router()
// load query
const getTargetClientsDetails = require("../../database/queries/editProfile/getTargetClientsDetails")
const editProfileSection = require("../../database/queries/editProfile/editProfileSection")
// const updateTargetClientsDetails = require("../../database/queries/editProfile/updateTargetClients")
const updateProfileSection = require("../../database/queries/editProfile/updateProfileSection")

router.post("/", async (req, res) => {
  const section = req.originalUrl.split("/")[2]

  // NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user
  const profileID = req.originalUrl.split("/")[3]

  const storedAnswers = await editProfileSection(section, profileID)

  updateProfileSection(profileID, req.body, storedAnswers)
    .then(() => {
      res.status(200)
      res.send()
    })
    .catch(() => {
      res.status(500)
      res.send(createError(500, "Error updating details"))
    })
})

module.exports = router
