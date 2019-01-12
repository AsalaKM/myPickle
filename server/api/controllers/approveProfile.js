const express = require("express")

const router = express.Router()
// const passport = require("passport")

// require query file here
const approveProfile = require("../../database/queries/approveProfile")

router.get("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[2]
  console.log("helloooo", profileID)
  approveProfile(profileID)
    .then(approved => res.status(200).send("success approving profile"))
    .catch(err => {
      console.log("ERR", err)
      res.status(400).json(err)
    })
})

module.exports = router
