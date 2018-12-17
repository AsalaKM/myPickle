const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
  console.log(req.body)
  // create user object
  // register new user
})

module.exports = router
