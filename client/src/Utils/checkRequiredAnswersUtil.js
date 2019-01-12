const checkRequiredAnswersUtil = (question, questionState, newUnanswered) => {
  // set up value and questionId
  let value
  let questionId

  // if (question.type === "address") {
  //   value = question.value
  //   questionId = question.questionId
  // } else {
  // get the value that's been input
  value = question.target.value

  // get the questionId from the input name
  questionId = question.target.name
  // }

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
