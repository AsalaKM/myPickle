import React from "react"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"
import { Answers } from "../../Common/Answers"

// import common components
import TextInput from "../../Common/Questions/TextInput"
import RadioInput from "../../Common/Questions/RadioInput"
import FileUploadInput from "../../Common/Questions/FileUploadInput"
import TextFieldInput from "../../Common/Questions/TextFieldInput"
import CheckboxInput from "../../Common/Questions/CheckboxInput"
import { Container, Wrapper } from "../../Generic-helpers/layoutpack"

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
      validateInput,
      checkRequiredAnswers,
      imageUpload,
    } = this.props

    return (
      <Wrapper>
        <Container>
          <Intro>
            <h2 className="tc mp-primary-color">Basic Profile Info</h2>
            <p>We've got just a final couple of questions to build your shiny profile!</p>
          </Intro>
          <Answers>
            {basicInfoQuestions
              .filter(question => question.inputType === "text" || question.inputType === "url")
              .map((question, index) => (
                <TextInput
                  key={index}
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                  validateInput={validateInput}
                />
              ))}
            {basicInfoQuestions
              .filter(question => question.inputType === "textarea")
              .map((question, index) => (
                <TextFieldInput
                  key={index}
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                  validateInput={validateInput}
                />
              ))}
            {basicInfoQuestions
              .filter(question => question.inputType === "radio")
              .map((question, index) => (
                <RadioInput
                  key={index}
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                  validateInput={validateInput}
                />
              ))}
            {basicInfoQuestions
              .filter(question => question.inputType === "file-upload")
              .map((question, index) => (
                <FileUploadInput
                  key={index}
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  unanswered={unanswered}
                  checkRequiredAnswers={checkRequiredAnswers}
                  imageUpload={imageUpload}
                  validateInput={validateInput}
                />
              ))}
            {basicInfoQuestions
              .filter(question => question.inputType === "checkbox")
              .map((question, index) => (
                <CheckboxInput
                  key={index}
                  question={question}
                  handleChange={handleChange}
                  answers={answers}
                  checkRequiredAnswers={checkRequiredAnswers}
                  validateInput={validateInput}
                  unanswered={unanswered}
                />
              ))}
          </Answers>
          <div className="flex items-center justify-between w-100 mb4">
            <Button id="prev-btn" onClick={this.props.handlePrevious}>
              Back
            </Button>
            <Button className="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Container>
      </Wrapper>
    )
  }
}
