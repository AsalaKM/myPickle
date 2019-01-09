const express = require("express")
const router = express.Router()
const getProfiles = require("../../database/queries/getProfiles")

router.get("/", (req, res) => {
  getProfiles()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(401).err(err))
})
module.exports = router
