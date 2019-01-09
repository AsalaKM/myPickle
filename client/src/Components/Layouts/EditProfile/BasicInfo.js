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

export default class BasicInfo extends Component {
  state = {
    profileId: "",
    basicAnswers: null,
    basicQuestions: null,
    unanswered: [],
    file: {},
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken)

      // get questions for the support-details section
      axios
        .get(`/get-questions/basic-info`)
        .then(questions => this.setState({ basicQuestions: questions.data }))
        .catch(err => console.log(err))

      // get the answers the user has provided for this section
      axios
        .get(`/edit-profile/basic-info`)
        .then(basicDetails => {
          console.log("data", basicDetails.data)
          this.setState({
            basicAnswers: basicDetails.data.questions,
            profileId: basicDetails.data.profileId,
          })
        })
        .catch(err => console.log(err))
    }
  }

  handleChange = option => {
    const { basicAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, basicAnswers, unanswered)

    this.setState({ basicAnswers: newAnswerState, unanswered: newUnanswered })
  }

  addImage = file => {
    console.log("REACHED", file)
    const newAnswerState = this.state.basicAnswers
    const questionId = file.target.name
    const filename = file.target.files[0].name
    const newFile = this.state.file
    newFile[questionId] = file.target.files[0]

    newAnswerState[questionId] = filename

    this.setState({ basicAnswers: newAnswerState, file: newFile })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { basicAnswers, profileId, file } = this.state

    if (Object.keys(file).length > 0) {
      this.uploadImage(profileId)
        .then(updateProfileUtil(history, basicAnswers, "basic-info"))
        .catch(err => console.log(err))
    } else {
      updateProfileUtil(history, basicAnswers, "basic-info")
    }
  }

  handleBack = e => {
    e.preventDefault()
    const { history } = this.props

    history.push("/edit-profile")
  }

  uploadImage = async profileId => {
    const { file } = this.state
    const formData = new FormData()
    for (let key in file) {
      formData.append(profileId, file[key])
    }
    await axios.post("/upload-image", formData).catch(err => console.log(err))
  }

  render() {
    const { basicAnswers, basicQuestions, unanswered } = this.state
    const { history } = this.props

    if (basicQuestions === null || basicAnswers === null) {
      return (
        <Intro>
          <h2 className="tc mp-primary-color">Loading Your Details...</h2>
        </Intro>
      )
    }

    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Basic Info</h2>
        </Intro>
        <QuestionSection
          questions={basicQuestions}
          handleChange={this.handleChange}
          answers={basicAnswers}
          unanswered={unanswered}
          addImage={this.addImage}
        />
        <div className="flex items-center justify-center w-100 mb4">
          <Button className="submit" onClick={this.handleSubmit}>
            Save Changes
          </Button>
          <Button className="submit" onClick={this.handleBack}>
            Go Back
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
