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
    // query to get all answers for profile related to section target clients (thats why involving question details for each answer is necessary)

    // const profileAnswersAndQuestions = await ProfileAnswer.aggregate([
    //   { $match: { profile: profileIDs[i] } },
    //   {
    //     $lookup: { from: "questions", localField: "question", foreignField: "_id", as: "question" },
    //   },
    //   { $unwind: "$question" },
    // ])

    const profileAnswers = await ProfileAnswer.find({ profile: profileIDs[i] })
    console.log(profileAnswers)

    for (let k = 0; k < profileAnswers.length; k++) {
      // const profile = {
      //   profileID: profileIDs[i],
      //   name: "",
      //   wellnessArea: "",
      //   imgURL: "",
      // }

      const questionDetails = await ProfileQuestion.find({ _id: profileAnswers[k]._id })

      console.log(questionDetails)

      // const name = profileAnswers.question[nameQuestion._id]
    }
  }
}

module.exports = findSupportProfiles
