import React, { Component } from "react"
import axios from "axios"
import swal from "sweetalert"

import { Button, Answers, Intro } from "../Register/Register.style"
import TextInput from "../../Common/Questions/TextInput"
import RadioInput from "../../Common/Questions/RadioInput"
import CheckboxInput from "../../Common/Questions/CheckboxInput"
import FileUploadInput from "../../Common/Questions/FileUploadInput"
import TextFieldInput from "../../Common/Questions/TextFieldInput"

const pathName = window.location.pathname
const id = pathName.split("/")[3]

export default class SupportDetails extends Component {
  state = {
    profileId: "",
    supportAnswers: null,
    supportQuestions: null,
    file: {},
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
    // set up id of input field as the name attribute of that input
    const questionId = option.target.name
    const newAnswerState = this.state.supportAnswers
    let answer

    if (option.target.type === "checkbox") {
      answer = option.target.value
      if (!newAnswerState[questionId]) {
        newAnswerState[questionId] = [answer]
      } else if (!newAnswerState[questionId].includes(answer)) {
        newAnswerState[questionId].push(answer)
      } else if (newAnswerState[questionId].includes(answer)) {
        const index = newAnswerState[questionId].indexOf(answer)
        newAnswerState[questionId].splice(index, 1)
      }
    } else {
      answer = option.target.value
      newAnswerState[questionId] = answer
    }
    this.setState({ supportAnswers: newAnswerState })
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
    const { targetAnswers } = this.state
    axios
      .post(`/update-profile/target/${id}`, targetAnswers)
      .then(result => {
        console.log("RESULT", result)
        swal("Done!", "Thanks for updating your profile!", "success").then(() => history.push("/"))
      })
      .catch(err =>
        swal({
          icon: "error",
          title: "An error occurred, sorry",
        })
      )
  }

  render() {
    const { supportAnswers, supportQuestions } = this.state

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
        <Answers>
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
        </Answers>
        <div className="flex items-center justify-between w-100 mb4">
          <Button className="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
