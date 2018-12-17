import React, { Component } from "react"

import RegisterIntro from "./RegisterIntro"
import RegisterStepOne from "./RegisterStepOne"
import RegisterStepTwo from "./RegisterStepTwo"

import axios from "axios"

class Register extends Component {
  state = {
    registerQuestions: null,
    registerAnswers: {},
    position: 0,
    unanswered: [],
  }

  componentDidMount() {
    axios
      .get("/get-register-questions")
      .then(res => this.setState({ registerQuestions: res.data }))
      .catch(err => console.log("message", err))
  }

  checkRequiredAnswers = question => {
    const value = question.target.value
    const questionId = question.target.name
    const newUnanswered = this.state.unanswered
    if (!value) {
      newUnanswered.push(questionId)
    } else {
      if (newUnanswered.includes(questionId)) {
        const index = newUnanswered.indexOf(questionId)
        newUnanswered.splice(index, 1)
      }
    }

    this.setState({ unanswered: newUnanswered })
  }

  checkStage = () => {
    // input the registration stage
    // get the question ids for that stage
    // check to see if they are in the answered state
    // if so invoke handleNext
    // if not then add questions to unanswered

    const answerState = this.state.registerAnswers
    const newUnanswered = this.state.unanswered
    let counter = 0

    if (this.state.position === 2) {
      const array = ["name", "email", "password", "password2", "phone"]
      array.forEach(item => {
        if (!answerState[item] || answerState[item].length < 1) {
          newUnanswered.push(item)
          counter += 1
        }
      })
      if (counter === 0) {
        this.handleNext()
      } else this.setState({ unanswered: newUnanswered })
    }
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

  handleNext = () => {
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
          <RegisterStepTwo
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
            handleChange={this.handleChange}
            answers={this.state.registerAnswers}
            checkRequiredAnswers={this.checkRequiredAnswers}
            unanswered={this.state.unanswered}
            checkStage={this.checkStage}
          />
        </React.Fragment>
      )
    }
    if (position === 3) {
      return (
        <React.Fragment>
          <h4>Hello!</h4>
        </React.Fragment>
      )
    }
  }
}

export default Register
