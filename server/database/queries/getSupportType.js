const ProfileQuestion = require("../../database/models/ProfileQuestion")
const SupportType = require("../../database/models/SupportType")

// get support type question to find appropriate answer in data object
const getSupportType = async dataObj => {
  const supportTypeQuestion = await ProfileQuestion.findOne({
    questionText: "What best describes your core service offering?",
  })
  // find support type answer coming from request object
  const supportTypeAnswer = dataObj[supportTypeQuestion._id]
  // check if answer is therapist or other
  if (supportTypeAnswer !== "Qualified therapy or counselling service") {
    const supportTypeElement = await SupportType.findOne({ type: "General" })
    console.log("GeneralType", supportTypeElement._id)
    return supportTypeElement._id
  } else {
    const supportTypeElement = await SupportType.findOne({ type: "Therapist" })
    console.log("TherapistType", supportTypeElement._id)
    return supportTypeElement._id
  }
}

module.exports = getSupportType