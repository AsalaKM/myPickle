const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const registerUserController = require("./registerUserController")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", getRegisterQuestionsController)
router.use("/register-user", registerUserController)

module.exports = router
