// create profile answers object filtering out user schema data
const getProfileAnswers = async dataObj => {
  // create profile object
  let profleAnswers = {}
  for (const key in dataObj) {
    if (
      key !== "name" &&
      key !== "email" &&
      key !== "phone" &&
      key !== "password" &&
      key !== "password2"
    ) {
      profleAnswers[key] = dataObj[key]
    }
  }

  return profleAnswers
}

module.exports = getProfileAnswers
