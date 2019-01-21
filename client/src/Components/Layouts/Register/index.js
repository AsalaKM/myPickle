import React, { Component } from "react"
import swal from "sweetalert"
import validator from "validator"

// components
import RegisterIntro from "./RegisterIntro"
import RegisterStepOne from "./RegisterStepOne"
import RegisterStepTwo from "./RegisterStepTwo"
import RegisterStepThree from "./RegisterStepThree"

// utils
import handleChangeUtil from "../../../Utils/handleChangeUtil"
import checkRequiredAnswersUtil from "../../../Utils/checkRequiredAnswersUtil"
import filterQuestionsUtil from "../../../Utils/filterQuestionsUtil"

import axios from "axios"

class Register extends Component {
  state = {
    registerQuestions: null,
    registerAnswers: {},
    position: 0,
    unanswered: [],
    errors: [],
    file: {},
    serverErrors: {},
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_HOST || ""}/get-register-questions`)
      .then(res => this.setState({ registerQuestions: res.data }))
      .catch(err => console.log("message", err))
    console.log("PROCESS", process.env.REACT_APP_HOST)
    window.scrollTo(0, 0)
  }

  validateInput = question => {
    // get the value that's been input and the question id
    const value = question.target.value
    const questionId = question.target.name

    // check if its empty and required
    this.checkRequiredAnswers(question)

    // get current answers from the state
    const answerState = this.state.registerAnswers
    const errorState = this.state.errors

    if (value) {
      // password validation
      if (questionId === "password") {
        if (!validator.isLength(value, { min: 6, max: 30 })) {
          errorState.push(questionId)
        } else {
          if (errorState.includes(questionId)) {
            const index = errorState.indexOf(questionId)
            errorState.splice(index, 1)
          }
        }
      }

      // check passwords match
      if (questionId === "password2") {
        if (answerState.password !== value) {
          errorState.push(questionId)
        } else {
          if (errorState.includes(questionId)) {
            const index = errorState.indexOf(questionId)
            errorState.splice(index, 1)
          }
        }
      }

      // check valid email
      if (questionId === "email") {
        if (!validator.isEmail(value)) {
          errorState.push(questionId)
        } else {
          if (errorState.includes(questionId)) {
            const index = errorState.indexOf(questionId)
            errorState.splice(index, 1)
          }
        }
      }
    }
  }

  checkRequiredAnswers = question => {
    const { unanswered, registerQuestions } = this.state

    const newUnanswered = checkRequiredAnswersUtil(question, registerQuestions, unanswered)

    this.setState({ unanswered: newUnanswered })
  }

  checkStage = async () => {
    const answerState = this.state.registerAnswers
    const newUnanswered = this.state.unanswered
    const errorState = this.state.errors
    let counter = 0

    if (this.state.position === 1) {
      const wellnessQuestion = this.state.registerQuestions[0]
      if (!answerState[wellnessQuestion._id] || answerState[wellnessQuestion._id].length < 1) {
        if (!newUnanswered.includes(wellnessQuestion._id)) newUnanswered.push(wellnessQuestion._id)
        counter += 1
      } else {
        if (newUnanswered.includes(wellnessQuestion._id)) {
          const index = newUnanswered.indexOf(wellnessQuestion._id)
          newUnanswered.splice(index, 1)
        }
      }
    }
    if (this.state.position === 2) {
      // get all the questions
      const questions = this.state.registerQuestions

      // get the adminQs that are required
      const requiredQs = questions
        .filter(question => question.section === "Admin Info" && question.isRequired === true)
        .map(requiredQ => requiredQ._id)

      // add the user qs
      requiredQs.push("name", "email", "password", "password2", "phone")

      requiredQs.forEach(item => {
        if (!answerState[item] || answerState[item].length < 1) {
          if (!newUnanswered.includes(item)) newUnanswered.push(item)
          counter += 1
        }
        // check all fields for address are filled in
        if (
          answerState[item] &&
          answerState[item].hasOwnProperty("address" || "city" || "postcode")
        ) {
          if (!answerState[item].hasOwnProperty("address" && "city" && "postcode")) {
            if (!newUnanswered.includes(item)) newUnanswered.push(item)
            counter += 1
          }
        }
        if (errorState.length > 0) {
          counter += 1
        }
      })

      // final check of password
      if (answerState.password !== answerState.password2) {
        if (!errorState.includes("password2")) errorState.push("password2")
        counter += 1
      }

      if (newUnanswered.length > 0) {
        counter += 1
      }

      // check the server to see if the email already exists
      else {
        await axios
          .post(`${process.env.REACT_APP_HOST || ""}/check-email`, { email: answerState.email })
          .catch(err => {
            console.log("EMAIL", err.response.data)
            this.setState({ serverErrors: err.response.data })
            counter += 1
          })
      }
    }
    if (counter === 0) {
      // reset serverErrors
      this.setState({ serverErrors: {} })
      this.handleNext()
    } else this.setState({ unanswered: newUnanswered, errors: errorState })
  }

  imageUpload = file => {
    const newAnswerState = this.state.registerAnswers
    const questionId = file.target.name
    const filename = file.target.files[0].name
    const newFile = this.state.file
    newFile[questionId] = file.target.files[0]

    newAnswerState[questionId] = filename

    this.setState({ registerAnswers: newAnswerState, file: newFile })
  }

  handleChange = option => {
    const answerState = this.state.registerAnswers
    const unanswered = this.state.unanswered

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, answerState, unanswered)

    this.setState({ registerAnswers: newAnswerState, unanswered: newUnanswered })
  }

  handleAddress = (row, answer, question) => {
    const state = this.state.registerAnswers

    if (!state[question]) {
      state[question] = {}
      state[question][row] = answer
    } else {
      state[question][row] = answer
    }

    this.setState(() => ({
      bookingAnswers: state,
    }))
  }

  handleNext = () => {
    this.setState({ position: this.state.position + 1 })
  }

  handlePrevious = e => {
    e.preventDefault()
    this.setState({ position: this.state.position - 1 })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { registerAnswers, file } = this.state

    const answerState = this.state.registerAnswers
    const newUnanswered = this.state.unanswered
    const errorState = this.state.errors
    let counter = 0

    // check all required questions answered correctly
    if (this.state.position === 3) {
      // get all the questions
      const questions = this.state.registerQuestions

      // get the adminQs that are required
      const requiredQs = questions
        .filter(question => question.section === "Basic Info" && question.isRequired === true)
        .map(requiredQ => requiredQ._id)

      requiredQs.forEach(item => {
        if (!answerState[item] || answerState[item].length < 1) {
          console.log("answer", item)
          if (!newUnanswered.includes(item)) newUnanswered.push(item)
          counter += 1
        }
        if (errorState.length > 0) {
          counter += 1
        }
      })
    }
    if (counter > 0) {
      this.setState({ unanswered: newUnanswered, errors: errorState })
      return
    }

    axios
      .post(`${process.env.REACT_APP_HOST || ""}/register-user`, registerAnswers)
      .then(profileId => {
        if (Object.keys(file).length > 0) {
          this.uploadImage(profileId.data)
        }
      })
      .then(() => {
        swal("Done!", "Thanks for creating a profile!", "success").then(() =>
          history.push("/newlogin")
        )
      })
      .catch(err => console.log(err))
  }

  uploadImage = profileId => {
    const { file } = this.state
    const formData = new FormData()
    for (let key in file) {
      formData.append(profileId, file[key])
    }
    axios
      .post(`${process.env.REACT_APP_HOST || ""}/upload-image`, formData)
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
            checkStage={this.checkStage}
            unanswered={this.state.unanswered}
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
            handleAddress={this.handleAddress}
            answers={this.state.registerAnswers}
            adminQuestions={
              this.state.registerQuestions &&
              filterQuestionsUtil(this.state.registerQuestions, "Admin Info")
            }
            validateInput={this.validateInput}
            checkRequiredAnswers={this.checkRequiredAnswers}
            errors={this.state.errors}
            unanswered={this.state.unanswered}
            checkStage={this.checkStage}
            serverErrors={this.state.serverErrors}
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
              filterQuestionsUtil(this.state.registerQuestions, "Basic Info")
            }
            handleSubmit={this.handleSubmit}
            validateInput={this.validateInput}
            checkRequiredAnswers={this.checkRequiredAnswers}
            unanswered={this.state.unanswered}
            checkStage={this.checkStage}
            imageUpload={this.imageUpload}
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
