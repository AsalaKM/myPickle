import React, { Component } from "react"
import axios from "axios"
import moment from "moment"
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

export default class BookingDetails extends Component {
  state = {
    profileId: "",
    bookingAnswers: null,
    bookingQuestions: null,
    unanswered: [],
  }

  componentDidMount() {
    // NOTE: until we implement cookies, we are getting the profile id from the url
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]

    // get questions for the support-details section
    axios
      .get(`/get-questions/availability-booking/${id}`)
      .then(questions => this.setState({ bookingQuestions: questions.data }))
      .catch(err => console.log(err))

    // get the answers the user has provided for this section
    axios
      .get(`/edit-profile/availability-booking/${id}`)
      .then(supportDetails => this.setState({ bookingAnswers: supportDetails.data, profileId: id }))
      .catch(err => console.log(err))
  }

  handleChange = option => {
    const { bookingAnswers, unanswered } = this.state

    const { newAnswerState, newUnanswered } = handleChangeUtil(option, bookingAnswers, unanswered)

    this.setState({ bookingAnswers: newAnswerState, unanswered: newUnanswered })
  }

  dropdownSelect = e => {
    const questionId = e.target.className
    const selected = e.target.textContent
    const state = this.state.bookingAnswers
    if (!state[questionId]) {
      state[questionId] = [selected]
    } else if (!state[questionId].includes(selected)) {
      state[questionId].push(selected)
    }
    this.setState({ bookingAnswers: state })
  }

  dropdownRemove = e => {
    const questionId = e.target.className
    const selected = e.target.textContent
    const state = this.state.bookingAnswers
    if (state[questionId].includes(selected)) {
      const index = state[questionId].indexOf(selected)
      state[questionId].splice(index, 1)
    }
    this.setState({ bookingAnswers: state })
  }

  handleDropdown = (answers, questionId) => {
    console.log("REACHED", answers)

    const filteredAnswers = answers.map(answer => answer.value)

    console.log("FILTERED", filteredAnswers)
    const state = this.state.bookingAnswers

    state[questionId] = filteredAnswers

    this.setState({ bookingAnswers: state })
  }

  handleMatrix = (row, answer, question) => {
    const state = this.state.bookingAnswers

    if (!state[question]) {
      state[question] = {}
      state[question][row] = [answer]
    } else if (!state[question][row]) {
      state[question][row] = [answer]
    } else if (!state[question][row].includes(answer)) {
      state[question][row].push(answer)
    } else if (state[question][row].includes(answer)) {
      const index = state[question][row].indexOf(answer)
      state[question][row].splice(index, 1)
    }

    this.setState(() => ({
      bookingAnswers: state,
    }))
  }

  handleDate = (date, questionId) => {
    const { bookingAnswers } = this.state

    const newAnswerState = bookingAnswers

    newAnswerState[questionId] = moment(date).format("YYYY-MM-DD")
    this.setState({ bookingAnswers: newAnswerState })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { bookingAnswers } = this.state

    updateProfileUtil(history, bookingAnswers, "availability-booking", id)
  }

  render() {
    const { bookingAnswers, bookingQuestions, unanswered } = this.state

    if (bookingQuestions === null || bookingAnswers === null) {
      return (
        <Intro>
          <h2 className="tc mp-primary-color">Loading Your Details...</h2>
        </Intro>
      )
    }

    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Booking & Availability</h2>
        </Intro>
        <QuestionSection
          questions={bookingQuestions}
          handleChange={this.handleChange}
          answers={bookingAnswers}
          unanswered={unanswered}
          dropdownRemove={this.dropdownRemove}
          dropdownSelect={this.dropdownSelect}
          handleMatrix={this.handleMatrix}
          handleDate={this.handleDate}
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
