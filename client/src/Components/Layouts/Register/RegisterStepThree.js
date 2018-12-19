import React from "react"

import { Button, Answers, Intro } from "./Register.style"
import TextInput from "../../Common/Questions/TextInput"
import RadioInput from "../../Common/Questions/RadioInput"
import FileUploadInput from "../../Common/Questions/FileUploadInput"

export default class RegisterStepThree extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
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
        <Intro>
          <h2 className="tc mp-primary-color">Basic Profile Info</h2>
          <p>We've got just a final couple of questions to build your shiny profile!</p>
        </Intro>
        <Answers>
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
        </Answers>
        <div className="flex items-center justify-between w-100 mb4">
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
