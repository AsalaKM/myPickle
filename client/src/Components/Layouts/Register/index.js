import React, { Component } from "react"

import RegisterIntro from "./RegisterIntro"
import RegisterStepOne from "./RegisterStepOne"

import axios from "axios"

class Register extends Component {
  state = {
    registerQuestions: null,
    registerAnswers: {},
    position: 0,
  }

  componentDidMount() {
    axios
      .get("/get-register-questions")
      .then(res => this.setState({ registerQuestions: res.data }))
      .catch(err => console.log("message", err))
  }

  handleChange = option => {
    const questionId = option.target.name
    const newAnswerState = this.state.registerAnswers
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

    this.setState({ registerAnswers: newAnswerState })
  }

  handleNext = e => {
    e.preventDefault()
    this.setState({ position: this.state.position + 1 })
  }

  handlePrevious = e => {
    e.preventDefault()
    this.setState({ position: this.state.position - 1 })
  }

  render() {
    const { position } = this.state
    if (position === 0) {
      return (
        <React.Fragment>
          <RegisterIntro handleNext={this.handleNext} />
        </React.Fragment>
      )
    }
    if (position === 1) {
      return (
        <React.Fragment>
          <RegisterStepOne
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
            wellnessQuestion={this.state.registerQuestions[0]}
            answers={this.state.registerAnswers}
            handleChange={this.handleChange}
          />
        </React.Fragment>
      )
    }
    if (position === 2) {
      return (
        <React.Fragment>
          <h1>Great progress!</h1>
        </React.Fragment>
      )
    }
  }
}

export default Register
