const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const signUpController = require("./signUpController")
const uploadImage = require("./uploadImage")

// edit profle controllers
const editSupportDetails = require("./editSupportDetails")
const editTargetClientsDetails = require("./editTargetClientsDetails")
const getQuestions = require("./getQuestions")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", getRegisterQuestionsController)
router.use("/register-user", signUpController)
router.use("/upload-image", uploadImage)
router.use("/get-questions/:section/:id", getQuestions)

// edit profile routes
router.use("/edit-profile/support/:id", editSupportDetails)
router.use("/edit-profile/target/:id", editTargetClientsDetails)

module.exports = router
