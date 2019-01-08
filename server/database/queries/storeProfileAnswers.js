// Load models
const ProfileAnswer = require("../../database/models/ProfileAnswer")

const storeAnswers = async (profileId, answerObj) => {
  // this loops through the answers object and adds each answer to the Answer model
  for (const key in answerObj) {
    let profileAnswer = new ProfileAnswer({
      profile: profileId,
      question: answerObj.key,
      answer: answerObj[key],
    })

    await profileAnswer.save()
  }
  const profileAnswers = await ProfileAnswer.find({ profile: profileId })
  return profileAnswers
}

module.exports = storeAnswers
