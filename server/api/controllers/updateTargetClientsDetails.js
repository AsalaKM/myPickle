const express = require("express")
const router = express.Router()

// load query

router.post("/", (req, res) => {
  const profileID = req.originalUrl.split("/")[3]

  console.log("req.bodyyyy", req.body)
})

module.exports = router
