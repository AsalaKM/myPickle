import React, { Component } from "react"
import swal from "sweetalert"

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
    unanswered: [],
    file: {},
  }

  componentDidMount() {
    axios
      .get("/get-register-questions")
      .then(res => this.setState({ registerQuestions: res.data }))
      .catch(err => console.log("message", err))
  }

  checkRequiredAnswers = question => {
    console.log("REACHED")
    // get the value that's been input
    const value = question.target.value

    // get the questionId from the input name
    const questionId = question.target.name

    let isRequired
    // deal with user questions
    const userArray = ["name", "password", "email", "password2", "phone"]
    if (userArray.includes(questionId)) {
      isRequired = true
    } else {
      // deal with any other question
      const questions = this.state.registerQuestions
      isRequired = questions.filter(question => question._id === questionId)[0].isRequired
    }

    // get our list of unanswered questions in state
    const newUnanswered = this.state.unanswered

    if (isRequired && !value) {
      newUnanswered.push(questionId)
    } else {
      if (isRequired && newUnanswered.includes(questionId)) {
        const index = newUnanswered.indexOf(questionId)
        newUnanswered.splice(index, 1)
      }
    }

    this.setState({ unanswered: newUnanswered })
  }

  checkStage = () => {
    console.log("CHECK STAGE REACHED")
    const answerState = this.state.registerAnswers
    const newUnanswered = this.state.unanswered
    let counter = 0

    if (this.state.position === 1) {
      const wellnessQuestion = this.state.registerQuestions[0]
      if (!answerState[wellnessQuestion._id] || answerState[wellnessQuestion._id].length < 1) {
        if (!newUnanswered.includes(wellnessQuestion._id)) newUnanswered.push(wellnessQuestion._id)
        counter += 1
        console.log(newUnanswered)
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
      })
    }
    if (counter === 0) {
      this.handleNext()
    } else this.setState({ unanswered: newUnanswered })
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
    // set up id of input field as the name attribute of that input
    const questionId = option.target.name
    const newAnswerState = this.state.registerAnswers
    const newUnanswered = this.state.unanswered
    let answer
    console.log("HANDLE", questionId)

    if (option.target.type === "checkbox") {
      if (newUnanswered.includes(questionId)) {
        const index = newUnanswered.indexOf(questionId)
        newUnanswered.splice(index, 1)
      }
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
    this.setState({ registerAnswers: newAnswerState, unanswered: newUnanswered })
  }

  handleNext = () => {
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
    const { history } = this.props
    const { registerAnswers, file } = this.state

    // upload the image
    // const formData = new FormData()
    // for (let key in file) {
    //   formData.append(key, file[key])
    // }

    // fetch("/upload-image", {
    //   method: "POST",
    //   body: formData,
    // }).catch(err => console.log(err))

    // axios.post("/upload-image", formData).catch(err => console.log(err))

    axios
      .post("/register-user", registerAnswers)
      .then(userId => {
        if (Object.keys(file).length > 0) {
          this.uploadImage(userId)
        }
      })
      .then(result => {
        console.log("RESULT", result)
        swal("Done!", "Thanks for creating a profile!", "success").then(() => history.push("/"))
      })
      .catch(err => console.log(err))
  }

  uploadImage = userId => {
    const { file } = this.state
    const formData = new FormData()
    for (let key in file) {
      formData.append(userId.data, file[key])
    }
    axios.post("/upload-image", formData).catch(err => console.log(err))
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
            answers={this.state.registerAnswers}
            adminQuestions={
              this.state.registerQuestions &&
              this.filterQuestions(this.state.registerQuestions, "Admin Info")
            }
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
