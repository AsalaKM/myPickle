import React, { Component } from "react"

export default class RadioInput extends Component {
  render() {
    const { question, handleChange, answers, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId, options, helperText } = question
    console.log("Q", question)
    return (
      <React.Fragment>
        <div>
          <header>
            <h4>{questionText}</h4>
            <p>{helperText}</p>
          </header>
          {options.map(option => {
            const uniqueId = option + questionId
            return (
              <label htmlFor={uniqueId}>
                <input
                  value={option}
                  id={uniqueId}
                  name={questionId}
                  type="radio"
                  onChange={handleChange}
                  onBlur={checkRequiredAnswers}
                />
                <p>{option}</p>
              </label>
            )
          })}
          {unanswered && unanswered.includes(questionId) ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    )
  }
}
