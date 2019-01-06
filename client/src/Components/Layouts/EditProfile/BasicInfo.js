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

// get id from url
// NOTE: this is until cookies are implemented
const pathName = window.location.pathname
const id = pathName.split("/")[3]

export default class BasicInfo extends Component {
  state = {
    profileId: "",
    basicAnswers: null,
    basicQuestions: null,
    unanswered: [],
  }

  componentDidMount() {
    // NOTE: until we implement cookies, we are getting the profile id from the url
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]

    // get questions for the support-details section
    axios
      .get(`/get-questions/basic-info/${id}`)
      .then(questions => this.setState({ basicQuestions: questions.data }))
      .catch(err => console.log(err))

    // get the answers the user has provided for this section
    axios
      .get(`/edit-profile/basic-info/${id}`)
      .then(basicDetails => this.setState({ basicAnswers: basicDetails.data, profileId: id }))
      .catch(err => console.log(err))
  }

  handleChange = option => {
    const { basicAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, basicAnswers, unanswered)

    this.setState({ basicAnswers: newAnswerState, unanswered: newUnanswered })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { basicAnswers } = this.state

    updateProfileUtil(history, basicAnswers, "basic-info", id)
  }

  render() {
    const { basicAnswers, basicQuestions, unanswered } = this.state

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
        />
        <div className="flex items-center justify-between w-100 mb4">
          <Button className="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
