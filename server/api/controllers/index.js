const express = require("express")

const router = express.Router()

const getRegisterQuestionsController = require("./getRegisterQuestionsController")
const signUpController = require("./signUpController")
const uploadImage = require("./uploadImage")
const getProfiles = require("./getProfiles")
const getPosts = require("./getPosts")

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

router.use("/profiles", getProfiles)
router.use("/blog", getPosts)
// NOTE: until we set up cookies I'm putting the profile ID into the URL so we can grab it and use it to get the right information for that user

router.use("/get-questions/:section/:id", getQuestions)

// edit profile routes
// router.use("/edit-profile/support/:id", editSupportDetails)
// router.use("/edit-profile/target/:id", editTargetClientsDetails)
router.use("/edit-profile/:section/:id", editProfileSection)

// update profile routes
// router.use("/update-profile/target/:id", updateTargetClientsDetails)
router.use("/update-profile/:section/:id", updateProfileSection)

module.exports = router
