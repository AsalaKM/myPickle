const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const signUpController = require("./signUpController")
const uploadImage = require("./uploadImage")
const article = require("./Article")
const categories = require("./categories")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", getRegisterQuestionsController)
router.use("/register-user", signUpController)
router.use("/upload-image", uploadImage)
router.use("/articles", article)
router.use("/categories", categories)

module.exports = router
