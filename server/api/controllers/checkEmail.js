const express = require("express")
const router = express.Router()

// require query file here
const checkEmailExists = require("../../database/queries/checkEmailExists")

router.post("/", (req, res) => {
  checkEmailExists(req.body.email)
    .then(emailExists => res.status(200).json(emailExists))
    .catch(err => {
      console.log("ERR", err)
      res.status(400).json(err)
    })
})

module.exports = router
