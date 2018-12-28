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
  const wellnessQuestionID = wellnessQuestion._id.toString()
  const nameQuestion = await ProfileQuestion.findOne({
    questionText: "Known organisation name",
  })
  const nameQuestionID = nameQuestion._id.toString()
  const profileArray = []
  const filePath =
    "/Users/simondupree/Documents/Web_Development/myPickle/client/src/assets/images/profiles"
  const getImageArr = await getImageNames(filePath)
  console.log(getImageArr)

  // getImageArr.forEach(imageURL => {
  //   const profileID = imageURL.split("-")[0]

  //   console.log(profileIDs.indexOf(profileID) > -1)

  //   // profileObj.avatarURL = imageURL
  // })

  for (let i = 0; i < profileIDs.length; i++) {
    const profileAnswers = await ProfileAnswer.find({ profile: profileIDs[i] })
    const profileObj = {}
    profileObj.profileID = profileIDs[i]
    for (let k = 0; k < profileAnswers.length; k++) {
      if (nameQuestionID == profileAnswers[k].question) {
        profileObj.organisation = profileAnswers[k].answer
      } else if (wellnessQuestionID == profileAnswers[k].question) {
        profileObj.wellnessType = profileAnswers[k].answer
      }
    }
    profileArray.push(profileObj)
  }
  console.log(profileArray)

  return profileArray
}

module.exports = findSupportProfiles
