import React, { Component } from "react"
import { ErrorMsg, TextField } from "./Questions.style"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default class CalendarInput extends Component {
  render() {
    const { question, handleDate, answers, unanswered } = this.props
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
          <DatePicker
            id="date"
            onChange={date => handleDate(date, questionId)}
            selected={answers[questionId] ? new Date(answers[questionId]) : null}
            placeholderText="Select date here"
            // dateFormat="YYYY-MM-DD"
            type="date"
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
