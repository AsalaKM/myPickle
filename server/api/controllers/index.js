const express = require("express")

const router = express.Router()

const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

// Get Profile Questions
router.use("/get-register-questions", getRegisterQuestions)

module.exports = router
