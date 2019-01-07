import React, { Component } from "react"
import axios from "axios"
import swal from "sweetalert"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"
import { Answers } from "../../Common/Answers"

// // import common components
// import { CheckboxField } from "../../Common/Questions/Questions.style"

// import common components
import QuestionSection from "../../Common/Questions/QuestionSection"

// import util functions
import handleChangeUtil from "../../../Utils/handleChangeUtil"
import updateProfileUtil from "../../../Utils/updateProfileUtil"

// get id from url
// NOTE: this is until cookies are implemented
const pathName = window.location.pathname
const id = pathName.split("/")[3]

class TargetClients extends Component {
  state = {
    profileId: "",
    targetAnswers: null,
    targetQuestions: null,
    unanswered: [],
  }

  componentDidMount() {
    axios
      .get(`/get-questions/target-clients/${id}`)
      .then(questions =>
        this.setState({
          targetQuestions: questions.data,
        })
      )
      .catch(err => console.log(err))

    axios
      .get(`/edit-profile/target-clients/${id}`)
      .then(answers => this.setState({ targetAnswers: answers.data, profileId: id }))
      .catch(err => console.log(err))
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

    updateProfileUtil(history, targetAnswers, "target-clients", id)
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
        <div className="flex items-center justify-between w-100 mb4">
          <Button className="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </React.Fragment>
    )
  }
}

export default TargetClients
