// creates profile objects for the find support section
// load the mongo models
const ProfileQuestion = require("../models/ProfileQuestion")
const Profile = require("../models/Profile")
const ProfileAnswer = require("../models/ProfileAnswer")
// load queries
const getImageNames = require("./getImageNames")

const findSupportProfiles = async () => {
  // get all profiles
  const profiles = await Profile.find({})
  // create profile ID array
  const profileIDs = await profiles.map(e => e._id)
  // find wellnessQuestion ID
  const wellnessQuestion = await ProfileQuestion.findOne({
    questionText: "Please select your area(s) of wellness",
  })
  const wellnessQuestionID = wellnessQuestion._id.toString()
  // find name of organisation question ID
  const nameQuestion = await ProfileQuestion.findOne({
    questionText: "Known organisation name",
  })
  const nameQuestionID = nameQuestion._id.toString()

  const profileArray = []
  // insert file path of profile pictures folder
  const filePath =
    "/Users/simondupree/Documents/Web_Development/myPickle/client/src/assets/images/profiles"
  // get all image paths
  const getImageArr = await getImageNames(filePath)

  // loop over profileIDs array
  for (let i = 0; i < profileIDs.length; i++) {
    // get all answers of each ID
    const profileAnswers = await ProfileAnswer.find({ profile: profileIDs[i] })
    // create profileObj for each ID
    const profileObj = {}
    // insert profileID for each entry
    profileObj.profileID = profileIDs[i]
    // loop over profileAnswers
    for (let k = 0; k < profileAnswers.length; k++) {
      // insert name answer
      nameQuestionID == profileAnswers[k].question
        ? (profileObj.organisation = profileAnswers[k].answer)
        : ""
      // insert wellness answer
      wellnessQuestionID == profileAnswers[k].question
        ? (profileObj.wellnessType = profileAnswers[k].answer)
        : ""
    }
    // loop over imageFileNames and check if profileID is included
    // insert imageURL
    getImageArr.forEach(imageURL => {
      const profileID = imageURL.split("-")[0]
      profileIDs[i] == profileID ? (profileObj.avatarURL = imageURL) : ""
    })
    profileArray.push(profileObj)
  }
  return profileArray
}

module.exports = findSupportProfiles
