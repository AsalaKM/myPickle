import React from "react"

import { Button } from "./Register.style"
import TextInput from "../../Common/Questions/TextInput"
import RadioInput from "../../Common/Questions/RadioInput"
import FileUploadInput from "../../Common/Questions/FileUploadInput"

export default class RegisterStepThree extends React.Component {
  render() {
    const {
      handleChange,
      answers,
      basicInfoQuestions,
      handleSubmit,
      unanswered,
      checkRequiredAnswers,
      imageUpload,
    } = this.props

    console.log("STEP3", basicInfoQuestions)
    return (
      <React.Fragment>
        <div className="BasicInfo">
          {basicInfoQuestions.map(question => {
            // pull out the details from each question
            const { inputType } = question

            if (inputType === "text" || inputType === "url") {
              return (
                <TextInput
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                />
              )
            }
            if (inputType === "radio") {
              return (
                <RadioInput
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                />
              )
            }
            if (inputType === "file-upload") {
              return (
                <FileUploadInput
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                  imageUpload={imageUpload}
                />
              )
            }
          })}
        </div>
        <div className="flex items-center justify-between w-100">
          <Button id="prev-btn" onClick={this.props.handlePrevious}>
            Back
          </Button>
          <Button className="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
