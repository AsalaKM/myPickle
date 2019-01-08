// load the mongo models
const ProfileQuestion = require("../models/ProfileQuestion")

// INITIAL SIGNUP
// get questions for admin-info plus basic-info plus wellness-areas question from support-details

const registerQuestions = async () => {
  const profileQuestions = await ProfileQuestion.find({
    $or: [
      { section: "Admin Info" },
      { section: "Basic Info" },
      { questionText: "Please select your area(s) of wellness" },
    ],
  })

  return profileQuestions
}

module.exports = registerQuestions
