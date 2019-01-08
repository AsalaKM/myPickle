const checkRequiredAnswersUtil = (question, questionState, newUnanswered) => {
  // get the value that's been input
  const value = question.target.value

  // get the questionId from the input name
  const questionId = question.target.name

  let isRequired
  // deal with user questions
  const userArray = ["name", "password", "email", "password2", "phone"]
  if (userArray.includes(questionId)) {
    isRequired = true
  } else {
    // deal with any other question
    isRequired = questionState.filter(question => question._id === questionId)[0].isRequired
  }

  if (isRequired && !value) {
    newUnanswered.push(questionId)
  } else {
    if (isRequired && newUnanswered.includes(questionId)) {
      const index = newUnanswered.indexOf(questionId)
      newUnanswered.splice(index, 1)
    }
  }

  return newUnanswered
}

export default checkRequiredAnswersUtil
