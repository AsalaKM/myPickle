
const ProfileAnswers = require("../models/answers")

const getQuestions = async (text) => {
  const question = await Question.findOne({ questionText: text });
  return question.id;

}

// get answers for Ptofiles answers

const allProfiles = async () => {
  // const ProfileAnswers = await ProfileAnswers.find({"_id":ObjectId("5c2c9c42d2a9fe38cc19d0d5")}, {"answer" : ""});
//   const ProfileAnswers = await ProfileAnswers.find({
// $ or: [
//   {

//   question:
// }

// ]

//   })


  return ProfileAnswers;
}

module.exports = allProfiles
