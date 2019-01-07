import React, { Component } from "react"
import Select from "react-select"
import makeAnimated from "react-select/lib/animated"

import { ErrorMsg, DropdownField } from "./Questions.style"

export default class DropdownInput extends Component {
  render() {
    const { question, answers, unanswered, handleDropdown } = this.props
    const { questionText, _id: questionId, options, helperText, isRequired } = question

    const selectOptions = options.map((item, index) => {
      return { value: item, label: item }
    })

    const selected = answers[questionId].map((item, index) => {
      return { value: item, label: item }
    })

    return (
      <React.Fragment>
        <DropdownField>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
            <p>{helperText}</p>
          </header>
          <Select
            isMulti
            name={questionId}
            options={selectOptions}
            // className="basic-multi-select"
            classNamePrefix="select"
            onChange={e => handleDropdown(e, questionId)}
            defaultValue={selected}
            components={makeAnimated()}
            className="dropdown-container"
            classNamePrefix="dropdown"
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "var(--lightPrimary)",
                primary: "var(--primary)",
              },
            })}
          />

          {/* {selected.length > 0 ? (
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
            <select className="select-items">
              {options.map((item, index) => {
                return (
                  <option key={index} className={questionId} onClick={dropdownSelect}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div> */}
          {unanswered && unanswered.includes(questionId) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </DropdownField>
      </React.Fragment>
    )
  }
}
