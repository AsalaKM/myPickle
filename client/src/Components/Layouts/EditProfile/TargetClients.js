import React, { Component } from "react"
import axios from "axios"
import swal from "sweetalert"

// import styled components
import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"
import { Answers } from "../../Common/Answers"

// import common components
import { CheckboxField } from "../../Common/Questions/Questions.style"

// import util functions
import handleChangeUtil from "../../../Utils/handleChangeUtil"

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

  handleSubmit = e => {
    e.preventDefault()
    const { history } = this.props
    const { targetAnswers } = this.state
    axios
      .post(`/update-profile/target-clients/${id}`, targetAnswers)
      .then(result => {
        console.log("RESULT", result)
        swal("Done!", "Thanks for updating your profile!", "success").then(() => history.push("/"))
      })
      .catch(err =>
        swal({
          icon: "error",
          title: "An error occurred, sorry",
        })
      )
  }

  render() {
    const { targetQuestions, targetAnswers } = this.state
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
        <Answers>
          {targetQuestions
            .filter(question => question.inputType === "checkbox")
            .map((question, index) => (
              <CheckboxField>
                <header>
                  <h4>
                    {question.questionText}
                    {question.isRequired ? "*" : ""}
                  </h4>
                  <p>{question.helperText}</p>
                </header>
                <div className="answers">
                  {question.options.map(option => {
                    const uniqueId = option + question._id
                    return (
                      <label htmlFor={uniqueId} key={Math.random()}>
                        <input
                          value={option}
                          type="checkbox"
                          id={uniqueId}
                          name={question._id}
                          onChange={this.handleChange}
                          checked={
                            targetAnswers[question._id] &&
                            targetAnswers[question._id].includes(option)
                          }
                        />
                        <span className="checkmark" />
                        <p>{option}</p>
                      </label>
                    )
                  })}
                </div>
              </CheckboxField>
            ))}
        </Answers>
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
