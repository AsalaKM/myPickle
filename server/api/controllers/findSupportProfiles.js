const express = require("express")
const router = express.Router()
const findSupportProfiles = require("../../database/queries/findSupportProfiles")

router.get("/", (req, res) => {
  findSupportProfiles()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(401).err(err))
})
module.exports = router
