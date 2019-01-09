const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const signUpController = require("./signUpController")
const uploadImage = require("./uploadImage")
const checkEmail = require("./checkEmail")
const loginUser = require("./loginUser")

// edit profle controllers
// const editSupportDetails = require("./editSupportDetails")
// const editTargetClientsDetails = require("./editTargetClientsDetails")
const editProfileSection = require("./editProfileSection")
const getQuestions = require("./getQuestions")

// update profile controllers
// const updateTargetClientsDetails = require("./updateTargetClientsDetails")
const updateProfileSection = require("./updateProfileSection")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({ title: "Express" })
})

router.use("/get-register-questions", getRegisterQuestionsController)
router.use("/register-user", signUpController)
router.use("/upload-image", uploadImage)
router.use("/check-email", checkEmail)
router.use("/login-user", loginUser)

// NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user

router.use("/get-questions/:section", getQuestions)

// edit profile routes
// router.use("/edit-profile/support/:id", editSupportDetails)
// router.use("/edit-profile/target/:id", editTargetClientsDetails)
router.use("/edit-profile/:section", editProfileSection)

// update profile routes
// router.use("/update-profile/target/:id", updateTargetClientsDetails)
router.use("/update-profile/:section", updateProfileSection)

module.exports = router
