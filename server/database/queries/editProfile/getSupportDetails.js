// load the mongo models
const ProfileAnswer = require("../../models/ProfileAnswer")
const Profile = require("../../models/Profile")

// INITIAL SIGNUP
// get support details questions and answers for those questions that have been pre-filled

const getSupportDetails = async profileID => {
  // get the profile with the ID
  // you need to do this to make sure the id you feed into the mongoose query below is an object not a string
  const profile = await Profile.findById(profileID)

  // get all the answers for this profile
  // add the question details for each question
  // filter out any question/answers that aren't Support Details

  const supportDetails = await ProfileAnswer.aggregate([
    { $match: { profile: profile._id } },
    { $lookup: { from: "questions", localField: "question", foreignField: "_id", as: "question" } },
    { $unwind: "$question" },
    { $match: { "question.section": "Support Details" } },
  ])

  let supportAnswers = {}
  // const filteredDetails = questions.map(
  //   answer => (obj[answer.question.question._id] = answer.answer)
  // )

  supportDetails.map(answer => (supportAnswers[answer.question._id] = answer.answer))

  return supportAnswers
}

module.exports = getSupportDetails
