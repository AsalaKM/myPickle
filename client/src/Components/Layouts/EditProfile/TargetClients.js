import React, { Component } from "react"
import axios from "axios"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"

// import common components
import QuestionSection from "../../Common/Questions/QuestionSection"

// import util functions
import handleChangeUtil from "../../../Utils/handleChangeUtil"
import updateProfileUtil from "../../../Utils/updateProfileUtil"
import setAuthToken from "../../../Utils/setAuthToken"

class TargetClients extends Component {
  state = {
    profileId: "",
    targetAnswers: null,
    targetQuestions: null,
    unanswered: [],
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken)
      // get questions for the support-details section
      axios
        .get(`${process.env.HOST || ""}/get-questions/target-clients`)
        .then(questions =>
          this.setState({
            targetQuestions: questions.data,
          })
        )
        .catch(err => console.log(err))

      axios
        .get(`${process.env.HOST || ""}/edit-profile/target-clients`)
        .then(answers =>
          this.setState({
            targetAnswers: answers.data.questions,
            profileId: answers.data.profileId,
          })
        )
        .catch(err => console.log(err))
    }
  }

  handleChange = option => {
    const { targetAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, targetAnswers, unanswered)

    this.setState({ targetAnswers: newAnswerState, unanswered: newUnanswered })
  }

  handleDropdown = (answers, questionId) => {
    const filteredAnswers = answers.map(answer => answer.value)
    const state = this.state.targetAnswers
    state[questionId] = filteredAnswers
    this.setState({ targetAnswers: state })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { targetAnswers } = this.state

    updateProfileUtil(history, targetAnswers, "target-clients")
  }

  handleBack = e => {
    e.preventDefault()
    const { history } = this.props

    history.push("/edit-profile")
  }

  render() {
    const { targetQuestions, targetAnswers, unanswered } = this.state
    if (targetQuestions === null || targetAnswers === null) {
      return (
        <Intro>
          <h2 className="tc mp-primary-color">Loading Your Details...</h2>
        </Intro>
      )
    }

    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Your Details</h2>
        </Intro>
        <QuestionSection
          questions={targetQuestions}
          handleChange={this.handleChange}
          answers={targetAnswers}
          unanswered={unanswered}
          handleDropdown={this.handleDropdown}
        />
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

export default TargetClients
