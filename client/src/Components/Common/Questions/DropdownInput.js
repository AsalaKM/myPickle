import React, { Component } from "react"

import { ErrorMsg } from "./Questions.style"

export default class DropdownInput extends Component {
  render() {
    const { question, dropdownRemove, dropdownSelect, answers, unanswered } = this.props
    const { questionText, _id: questionId, options, helperText, isRequired } = question
    const selected = answers[questionId] || []
    return (
      <React.Fragment>
        <div>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
            <p>{helperText}</p>
          </header>
          {selected.length > 0 ? (
            <React.Fragment>
              <h5>Currently selected:</h5>
              <ul>
                {selected.map((item, index) => {
                  return (
                    <li key={index} className={questionId} onClick={dropdownRemove}>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </React.Fragment>
          ) : null}
          <div className="answers">
            <h5>Select Options:</h5>
            <button className="dropdown-btn">Select here</button>
            <ul className="select-items">
              {options.map((item, index) => {
                return (
                  <li key={index} className={questionId} onClick={dropdownSelect}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          {unanswered && unanswered.includes(questionId) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    )
  }
}
