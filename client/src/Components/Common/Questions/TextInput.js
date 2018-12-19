import React, { Component } from "react"

import { TextField, ErrorMsg } from "./Questions.style"

export default class TextInput extends Component {
  render() {
    const { question, handleChange, answers, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId, helperText, isRequired } = question

    return (
      <React.Fragment>
        <TextField>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
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
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </TextField>
      </React.Fragment>
    )
  }
}
