import React, { Component } from "react"

export default class FileUploadInput extends Component {
  render() {
    const { question, answers, handleChange } = this.props
    const { questionText, _id: questionId, helperText } = question
    // this will need to get the file from the database and assign to value
    return (
      <React.Fragment>
        <div>
          <header>
            <h4>{questionText}</h4>
            <p>{helperText}</p>
          </header>
          <label htmlFor={questionId}>
            <input
              id={questionId}
              name={questionId}
              onChange={handleChange}
              className="file-upload-input"
              type="file"
            />
          </label>
          <p>Current File: {answers[questionId] ? answers[questionId] : "None"}</p>
        </div>
      </React.Fragment>
    )
  }
}
