import React, { Component } from "react"

export default class TextFieldInput extends Component {
  render() {
    const { question, handleChange, answers, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId } = question

    return (
      <React.Fragment>
        <div>
          <header>
            <h4>{questionText}</h4>
          </header>
          <textarea
            type="textarea"
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
