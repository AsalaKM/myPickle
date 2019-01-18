import React, { Component } from "react"
import axios from "axios"
// import swal from "sweetalert"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"

// import common components
import QuestionSection from "../../Common/Questions/QuestionSection"

// import util functions
import handleChangeUtil from "../../../Utils/handleChangeUtil"
import updateProfileUtil from "../../../Utils/updateProfileUtil"
import setAuthToken from "../../../Utils/setAuthToken"

export default class SupportDetails extends Component {
  state = {
    profileId: "",
    supportAnswers: null,
    supportQuestions: null,
    file: {},
    unanswered: [],
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken)
      // get questions for the support-details section
      axios
        .get(`${process.env.REACT_APP_HOST || ""}/get-questions/support-details`)
        .then(questions => this.setState({ supportQuestions: questions.data }))
        .catch(err => console.log(err))

      // get the answers the user has provided for this section
      axios
        .get(`${process.env.REACT_APP_HOST || ""}/edit-profile/support-details`)
        .then(supportDetails =>
          this.setState({
            supportAnswers: supportDetails.data.questions,
            profileId: supportDetails.data.profileId,
          })
        )
        .catch(err => console.log(err))
    }
  }

  handleChange = option => {
    const { supportAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, supportAnswers, unanswered)

    this.setState({ supportAnswers: newAnswerState, unanswered: newUnanswered })
  }

  handleDropdown = (answers, questionId) => {
    const filteredAnswers = answers.map(answer => answer.value)
    const state = this.state.supportAnswers
    state[questionId] = filteredAnswers
    this.setState({ supportAnswers: state })
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

    updateProfileUtil(history, supportAnswers, "support-details")
  }

  handleBack = e => {
    e.preventDefault()
    const { history } = this.props

    history.push("/edit-profile")
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
          handleDropdown={this.handleDropdown}
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
        <div className="flex items-center justify-center w-100 mb4">
          <Button className="submit" onClick={this.handleBack}>
            Go Back
          </Button>
          <Button className="submit" onClick={this.handleSubmit}>
            Save Changes
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
