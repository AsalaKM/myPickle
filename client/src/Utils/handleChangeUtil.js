// util function that handles change depending on the input type
// takes in the input details, the current answer state of the component and the unanswered state of the component

const handleChangeUtil = (option, newAnswerState, newUnanswered) => {
  // set up id of input field as the name attribute of that input
  const questionId = option.target.name
  let answer

  if (option.target.type === "checkbox") {
    if (newUnanswered.includes(questionId)) {
      const index = newUnanswered.indexOf(questionId)
      newUnanswered.splice(index, 1)
    }
    answer = option.target.value
    if (!newAnswerState[questionId]) {
      newAnswerState[questionId] = [answer]
    } else if (!newAnswerState[questionId].includes(answer)) {
      newAnswerState[questionId].push(answer)
    } else if (newAnswerState[questionId].includes(answer)) {
      const index = newAnswerState[questionId].indexOf(answer)
      newAnswerState[questionId].splice(index, 1)
    }
  } else {
    answer = option.target.value
    newAnswerState[questionId] = answer
  }

  const result = { newAnswerState, newUnanswered }

  return result
}

export default handleChangeUtil
