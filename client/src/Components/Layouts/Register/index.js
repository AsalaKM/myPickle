import React, { Component } from "react"

import RegisterIntro from "./RegisterIntro"
import RegisterStepOne from "./RegisterStepOne"
import RegisterStepTwo from "./RegisterStepTwo"
import RegisterStepThree from "./RegisterStepThree"

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
    // set up id of input field as the name attribute of that input
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

  filterQuestions = (array, string) => {
    return array.filter(e => {
      if (e.section.includes(string)) {
        return e
      }
      return ""
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { registerAnswers } = this.state

    axios
      .post("/submit/", registerAnswers)
      .then(result => console.log(result))
      .catch(err => console.log(err))
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
          <RegisterStepTwo
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
            handleChange={this.handleChange}
            answers={this.state.registerAnswers}
            adminQuestions={
              this.state.registerQuestions &&
              this.filterQuestions(this.state.registerQuestions, "Admin Info")
            }
          />
        </React.Fragment>
      )
    }
    if (position === 3) {
      return (
        <React.Fragment>
          <RegisterStepThree
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
            handleChange={this.handleChange}
            answers={this.state.registerAnswers}
            basicInfoQuestions={
              this.state.registerQuestions &&
              this.filterQuestions(this.state.registerQuestions, "Basic Info")
            }
            handleSubmit={this.handleSubmit}
          />
        </React.Fragment>
      )
    }
  }
}

export default Register
