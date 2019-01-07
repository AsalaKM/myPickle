import React, { Component } from "react"

import { MatrixField, ErrorMsg } from "./Questions.style"

export default class MatrixInput extends Component {
  render() {
    const { question, handleMatrix, answers, unanswered } = this.props
    const { questionText, _id: questionId, options, helperText, isRequired } = question
    return (
      <React.Fragment>
        <MatrixField>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
            <p>{helperText}</p>
          </header>
          <div className="answers">
            {options.rows.map((e, i) => (
              <div key={i} className="matrixanswers">
                <p className="row-questions" id={i}>
                  {options.rows[i]}{" "}
                </p>
                <div className="options">
                  {options.columns.map((elem, ind) => (
                    <label key={ind} htmlFor={e}>
                      <input
                        id={ind}
                        name={e}
                        type="checkbox"
                        value={elem}
                        className={`matrix ${ind}`}
                        onChange={() => {
                          handleMatrix(options.rows[i], elem, questionId)
                        }}
                        checked={
                          answers[questionId] &&
                          answers[questionId][options.rows[i]] &&
                          answers[questionId][options.rows[i]].includes(elem)
                        }
                      />
                      <span className="checkmark" />
                      <p>{elem}</p>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {unanswered && unanswered.includes(questionId) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </MatrixField>
      </React.Fragment>
    )
  }
}
