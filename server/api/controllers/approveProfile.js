const express = require("express")

const router = express.Router()

// require query file here
const approveProfile = require("../../database/queries/approveProfile")

router.post("/", (req, res) => {
  approveProfile(id)
    .then(approved => res.status(200).json(approved))
    .catch(err => {
      console.log("ERR", err)
      res.status(400).json(err)
    })
})

module.exports = router
