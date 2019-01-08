import React, { Component } from "react"

import { FileField } from "./Questions.style"

export default class FileUploadInput extends Component {
  render() {
    const { question, answers, imageUpload } = this.props
    const { questionText, _id: questionId, helperText } = question
    // this will need to get the file from the database and assign to value
    return (
      <React.Fragment>
        <FileField>
          <header>
            <h4>{questionText}</h4>
            <p>{helperText}</p>
          </header>
          <label htmlFor={questionId}>
            <input
              id={questionId}
              name={questionId}
              onChange={imageUpload}
              className="file-upload-input"
              type="file"
              multiple={false}
              accept=".png, .jpg, .jpeg"
            />
          </label>
          <p>Current File: {answers[questionId] ? answers[questionId] : "None"}</p>
        </FileField>
      </React.Fragment>
    )
  }
}
