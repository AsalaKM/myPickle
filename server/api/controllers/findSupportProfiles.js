const express = require("express")
const router = express.Router()
const findSupportProfiles = require("../../database/queries/findSupportProfiles")

router.get("/", (req, res) => {
  findSupportProfiles()
    .then(result => console.log(result))
    .catch(err => console.log(err))
})
module.exports = router
