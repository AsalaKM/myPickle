// load the mongo models
const Profile = require("../../models/Profile")
const ProfileAnswer = require("../../models/ProfileAnswer")

// get target clients section answers related to profileID
const getTargetClientsDetails = async profileID => {
  // get profile of user
  const profile = await Profile.findById(profileID)

  // query to get all answers for profile related to section target clients (thats why involving question details for each answer is necessary)

  const targetClientsDetails = await ProfileAnswer.aggregate([
    { $match: { profile: profile._id } },
    { $lookup: { from: "questions", localField: "question", foreignField: "_id", as: "question" } },
    { $unwind: "$question" },
    { $match: { "question.section": "Target Clients" } },
  ])

  // loop over array and create object with questionID: answer
  let targetAnswers = {}
  targetClientsDetails.forEach(answer => (targetAnswers[answer.question._id] = answer.answer))

  return targetAnswers
}

module.exports = getTargetClientsDetails
