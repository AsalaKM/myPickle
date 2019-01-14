// creates profile objects for the browse profiles component
// load the mongo models
const ProfileQuestion = require("../models/ProfileQuestion")
const Profile = require("../models/Profile")
const ProfileAnswer = require("../models/ProfileAnswer")
// load queries
const getImageNames = require("./getImageNames")
// start function
const getProfiles = async () => {
  // get all profiles
  const profiles = await Profile.find({})
  // create profile ID array
  const profileIDs = await profiles.map(e => ({ id: e._id, approved: e.approved }))

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
  const filePath = `${__dirname}/../../assets/profile-images`

  // get all image file names
  const getImageArr = await getImageNames(filePath)

  // loop over profileIDs array
  for (let i = 0; i < profileIDs.length; i++) {
    // get all answers of each ID
    const profileAnswers = await ProfileAnswer.find({ profile: profileIDs[i].id })
    // create profileObj for each ID
    const profileObj = {}
    // insert profileID for each entry
    profileObj.profileID = profileIDs[i].id
    // insert approved status
    profileObj.approved = profileIDs[i].approved
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
  console.log(profileArray)

  return profileArray
}

module.exports = getProfiles
