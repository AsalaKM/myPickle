const ProfileQuestion = require("../../database/models/ProfileQuestion")
const SupportType = require("../../database/models/SupportType")

// get support type question to find appropriate answer in data object
const getSupportType = async dataObj => {
  const supportTypeQuestion = await ProfileQuestion.findOne({
    questionText: "What best describes your core service offering?",
  })
  // find support type answer coming from request object
  const supportTypeAnswer = dataObj[supportTypeQuestion._id]

  console.log(supportTypeAnswer)
  // check if answer is therapist or other
  if (
    supportTypeAnswer === "Qualified therapy or counselling service" ||
    supportTypeAnswer.includes("Qualified therapy or counselling service")
  ) {
    const supportTypeElement = await SupportType.findOne({ type: "Therapist" })
    return supportTypeElement._id
  }
  const supportTypeElement = await SupportType.findOne({ type: "General" })
  return supportTypeElement._id
}

module.exports = getSupportType
