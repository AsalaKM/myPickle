const express = require("express")
const router = express.Router()

const getSupportDetails = require("../../database/queries/editProfile/getSupportDetails")

router.get("/", (req, res) => {
  console.log("REACHED")
  getSupportDetails("5c1b84cb5aaa7ca4c761ac1d")
    .then(questions => {
      console.log("Qs", questions)
      res.status(200).json(questions)
    })
    .catch(err => res.status(500).send("Server Error"))
})

module.exports = router
