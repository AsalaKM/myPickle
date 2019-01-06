import React, { Component } from "react"
import axios from "axios"
// import swal from "sweetalert"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"
// import { Answers } from "../../Common/Answers"

// // import common components
// import TextInput from "../../Common/Questions/TextInput"
// import RadioInput from "../../Common/Questions/RadioInput"
// import CheckboxInput from "../../Common/Questions/CheckboxInput"
// import FileUploadInput from "../../Common/Questions/FileUploadInput"
// import TextFieldInput from "../../Common/Questions/TextFieldInput"

// import common components
import QuestionSection from "../../Common/Questions/QuestionSection"

// import util functions
import handleChangeUtil from "../../../Utils/handleChangeUtil"
import updateProfileUtil from "../../../Utils/updateProfileUtil"

// get id from url
// NOTE: this is until cookies are implemented
const pathName = window.location.pathname
const id = pathName.split("/")[3]

export default class SupportDetails extends Component {
  state = {
    profileId: "",
    supportAnswers: null,
    supportQuestions: null,
    file: {},
    unanswered: [],
  }

  componentDidMount() {
    // NOTE: until we implement cookies, we are getting the profile id from the url
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]

    // get questions for the support-details section
    axios
      .get(`/get-questions/support-details/${id}`)
      .then(questions => this.setState({ supportQuestions: questions.data }))
      .catch(err => console.log(err))

    // get the answers the user has provided for this section
    axios
      .get(`/edit-profile/support-details/${id}`)
      .then(supportDetails => this.setState({ supportAnswers: supportDetails.data, profileId: id }))
      .catch(err => console.log(err))
  }

  handleChange = option => {
    const { supportAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, supportAnswers, unanswered)

    this.setState({ supportAnswers: newAnswerState, unanswered: newUnanswered })
  }

  imageUpload = file => {
    const newAnswerState = this.state.supportAnswers
    const questionId = file.target.name
    const filename = file.target.files[0].name
    const newFile = this.state.file
    newFile[questionId] = file.target.files[0]

    newAnswerState[questionId] = filename

    this.setState({ supportAnswers: newAnswerState, file: newFile })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { supportAnswers } = this.state

    updateProfileUtil(history, supportAnswers, "support-details", id)
  }

  render() {
    const { supportAnswers, supportQuestions, unanswered } = this.state

    if (supportQuestions === null || supportAnswers === null) {
      return (
        <Intro>
          <h2 className="tc mp-primary-color">Loading Your Details...</h2>
        </Intro>
      )
    }

    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Support Details</h2>
        </Intro>
        <QuestionSection
          questions={supportQuestions}
          handleChange={this.handleChange}
          answers={supportAnswers}
          unanswered={unanswered}
          imageUpload={this.imageUpload}
        />
        {/* <Answers>
          {supportQuestions
            .filter(question => question.inputType === "text" || question.inputType === "url")
            .map((question, index) => (
              <TextInput
                key={index}
                question={question}
                handleChange={this.handleChange}
                answers={supportAnswers}
              />
            ))}
          {supportQuestions
            .filter(question => question.inputType === "textarea")
            .map((question, index) => (
              <TextFieldInput
                key={index}
                question={question}
                handleChange={this.handleChange}
                answers={supportAnswers}
              />
            ))}
          {supportQuestions
            .filter(question => question.inputType === "radio")
            .map((question, index) => (
              <RadioInput
                key={index}
                question={question}
                handleChange={this.handleChange}
                answers={supportAnswers}
              />
            ))}
          {supportQuestions
            .filter(question => question.inputType === "checkbox")
            .map((question, index) => (
              <CheckboxInput
                key={index}
                question={question}
                handleChange={this.handleChange}
                answers={supportAnswers}
              />
            ))}
          {supportQuestions
            .filter(question => question.inputType === "file-upload")
            .map((question, index) => (
              <FileUploadInput
                key={index}
                question={question}
                handleChange={this.handleChange}
                answers={supportAnswers}
                imageUpload={this.imageUpload}
              />
            ))}
        </Answers> */}
        <div className="flex items-center justify-between w-100 mb4">
          <Button className="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
