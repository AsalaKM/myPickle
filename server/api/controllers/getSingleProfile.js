const express = require("express")
const router = express.Router()
const { getAnswersProfile } = require("../../database/queries/getSingleProfile")

 router.get("/", (req, res) => {
  getAnswersProfile(profileID)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(401).err(err))
})
module.exports = router