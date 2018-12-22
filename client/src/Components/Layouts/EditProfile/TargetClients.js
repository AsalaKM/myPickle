import React, { Component } from "react"
import axios from "axios"

import { Button, Answers, Intro } from "../Register/Register.style"
import { CheckboxField } from "../../Common/Questions/Questions.style"

class TargetClients extends Component {
  state = {
    profileId: "",
    targetAnswers: null,
    targetQuestions: null,
    unanswered: [],
    errors: {},
    loaded: false,
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]

    axios
      .get(`/get-questions/target-clients/${id}`)
      .then(questions =>
        this.setState({
          targetQuestions: questions.data,
          loaded: true,
        })
      )
      .catch(err => console.log(err))

    axios
      .get(`/edit-profile/target/${id}`)
      .then(answers => this.setState({ targetAnswers: answers.data, profileId: id }))
      .catch(err => console.log(err))
  }

  render() {
    const { loaded, targetQuestions, targetAnswers } = this.state
    console.log(targetQuestions)

    if (!loaded) {
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
                <div>
                  {question.options.map(option => {
                    const uniqueId = option + question._id
                    return (
                      <label htmlFor={uniqueId} key={Math.random()}>
                        <input
                          value={option}
                          type="checkbox"
                          id={uniqueId}
                          name={question._id}
                          // checked={
                          //   targetAnswers[question._id] &&
                          //   targetAnswers[question._id].includes(option)
                          // }
                        />
                        <p>{option}</p>
                      </label>
                    )
                  })}
                </div>
              </CheckboxField>
            ))}
        </Answers>
      </React.Fragment>
    )
  }
}

export default TargetClients
