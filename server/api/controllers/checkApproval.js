const express = require("express")

const router = express.Router()
const passport = require("passport")

// require query file here
const checkApproval = require("../../database/queries/checkApproval")

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  checkApproval(req.user.profileId)
    .then(bool => res.status(200).json(bool))
    .catch(err => {
      console.log("ERR", err)
      res.status(400).json(err)
    })
})

module.exports = router
