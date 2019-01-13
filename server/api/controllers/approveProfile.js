const express = require("express")

const router = express.Router()
// const passport = require("passport")

// require query file here
const approveProfile = require("../../database/queries/approveProfile")

router.post("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[2]
  approveProfile(profileID, req.body.approved)
    .then(approved => res.status(200).send("success approving profile"))
    .catch(err => {
      console.log("ERR", err)
      res.status(400).json(err)
    })
})

module.exports = router
