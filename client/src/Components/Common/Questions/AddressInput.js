import React, { Component } from "react"

import { TextField, ErrorMsg, AddressField } from "./Questions.style"

export default class AddressInput extends Component {
  render() {
    const { question, handleAddress, answers, unanswered, checkRequiredAnswers } = this.props
    const { questionText, _id: questionId, helperText, isRequired } = question

    return (
      <React.Fragment>
        <AddressField>
          <header>
            <h4>
              {questionText}
              {isRequired ? " *" : ""}
            </h4>
            <p>{helperText}</p>
          </header>
          <label>
            <p>Address</p>
            <input
              type="text"
              name="address"
              onChange={value => {
                handleAddress("address", value.target.value, questionId)
              }}
              value={
                answers[questionId] && answers[questionId].address
                  ? answers[questionId].address
                  : ""
              }
              onBlur={value =>
                checkRequiredAnswers &&
                checkRequiredAnswers({
                  target: {
                    value: value.target.value,
                    name: questionId,
                  },
                })
              }
            />
          </label>
          <label>
            <p>City</p>
            <input
              type="text"
              name="city"
              onChange={value => {
                handleAddress("city", value.target.value, questionId)
              }}
              value={
                answers[questionId] && answers[questionId].city ? answers[questionId].city : ""
              }
              onBlur={value =>
                checkRequiredAnswers &&
                checkRequiredAnswers({
                  target: {
                    value: value.target.value,
                    name: questionId,
                  },
                })
              }
            />
          </label>
          <label>
            <p>Postcode</p>
            <input
              type="text"
              name="postcode"
              onChange={value => {
                handleAddress("postcode", value.target.value, questionId)
              }}
              value={
                answers[questionId] && answers[questionId].postcode
                  ? answers[questionId].postcode
                  : ""
              }
              onBlur={value =>
                checkRequiredAnswers &&
                checkRequiredAnswers({
                  target: {
                    value: value.target.value,
                    name: questionId,
                  },
                })
              }
            />
          </label>
          {unanswered && unanswered.includes(questionId) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </AddressField>
      </React.Fragment>
    )
  }
}
