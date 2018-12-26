// load the mongo models
const ProfileQuestion = require("../models/ProfileQuestion")
const SupportType = require("../models/SupportType")
const User = require("../models/User")
const Profile = require("../models/Profile")
const ProfileAnswer = require("../models/ProfileAnswer")

const getImageNames = require("./getImageNames")

const findSupportProfiles = async () => {
  // const profiles = await Profile.find({})
  // const profileIDs = profiles.map(e => e._id)
  // console.log(profileIDs)

  const profileAnswers = await ProfileAnswer.find({})
  console.log(profileAnswers)

  const wellnessQuestion = await ProfileQuestion.findOne({
    questionText: "Please select your area(s) of wellness",
  })

  const filePath =
    "/Users/simondupree/Documents/Web_Development/myPickle/client/src/assets/images/profiles"
  const getImageArr = await getImageNames(filePath)
}

module.exports = findSupportProfiles
