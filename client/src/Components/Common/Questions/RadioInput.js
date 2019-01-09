import React, { Component } from "react"

import { RadioField, ErrorMsg } from "./Questions.style"

export default class RadioInput extends Component {
  render() {
    const { question, answers, handleChange, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId, options, helperText, isRequired } = question
    return (
      <React.Fragment>
        <RadioField>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
            <p>{helperText}</p>
          </header>
          <div className="answers">
            {options.map((option, index) => {
              const uniqueId = option + questionId
              return (
                <label htmlFor={uniqueId} key={index}>
                  <input
                    value={option}
                    id={uniqueId}
                    name={questionId}
                    type="radio"
                    onChange={handleChange}
                    onBlur={checkRequiredAnswers}
                    checked={answers[questionId] && answers[questionId].includes(option)}
                  />
                  <span className="checkmark" />
                  <p>{option}</p>
                </label>
              )
            })}
          </div>
          {unanswered && unanswered.includes(questionId) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </RadioField>
      </React.Fragment>
    )
  }
}
