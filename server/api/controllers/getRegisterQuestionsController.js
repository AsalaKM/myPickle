const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  getRegisterQuestions()
    .then(questions => {
      console.log(questions)
      res.status(200).json(questions)
    })
    .catch(err =>
      {
        console.log(err)
        res.status(500).send("Server Error")})
})

module.exports = router
