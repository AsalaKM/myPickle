const filterQuestionsUtil = (array, string) => {
  return array.filter(e => {
    if (e.section.includes(string)) {
      return e
    }
    return ""
  })
}

export default filterQuestionsUtil
