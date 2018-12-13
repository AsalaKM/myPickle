import React, { Component } from "react"

import RegisterIntro from "./RegisterIntro"
import RegisterStepOne from "./RegisterStepOne"

class Register extends Component {
  state = {
    registerQuestions: null,
    registerAnswers: null,
    position: 0,
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
          <RegisterStepOne handleNext={this.handleNext} handlePrevious={this.handlePrevious} />
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
