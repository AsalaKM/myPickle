import React, { Component } from "react"

export default class TextInput extends Component {
  render() {
    const { question, handleChange, answers, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId, helperText } = question

    return (
      <React.Fragment>
        <div>
          <header>
            <h4>{questionText}</h4>
            <p>{helperText}</p>
          </header>
          <input
            type="text"
            name={questionId}
            onChange={handleChange}
            value={answers[questionId] ? answers[questionId] : ""}
            onBlur={checkRequiredAnswers}
          />
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
