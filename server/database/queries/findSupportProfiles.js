// load the mongo models
const ProfileQuestion = require("../models/ProfileQuestion")
const SupportType = require("../models/SupportType")
const User = require("../models/User")
const Profile = require("../models/Profile")
const ProfileAnswer = require("../models/ProfileAnswer")

const getImageNames = require("./getImageNames")

const findSupportProfiles = async () => {
  const profiles = await Profile.find({})
  const profileIDs = await profiles.map(e => e._id)
  const wellnessQuestion = await ProfileQuestion.findOne({
    questionText: "Please select your area(s) of wellness",
  })
  const nameQuestion = await ProfileQuestion.findOne({
    questionText: "Known organisation name",
  })

  // const filePath =
  //   "/Users/simondupree/Documents/Web_Development/myPickle/client/src/assets/images/profiles"
  // const getImageArr = await getImageNames(filePath)

  for (let i = 0; i < profileIDs.length; i++) {
    const profileAnswers = await ProfileAnswer.find({ profile: profileIDs[i] })
    console.log(profileAnswers)

    // for (let k = 0; k < profileAnswers.length; k++) {
    //   const profile = {
    //     profileID: profileIDs[i],
    //     name: "",
    //     wellnessArea: "",
    //     imgURL: "",
    //   }
    //   console.log(profileAnswers[k].question === nameQuestion._id)

    //   // const name = profileAnswers.question[nameQuestion._id]
    // }
  }
}

module.exports = findSupportProfiles
