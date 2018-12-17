import React from "react"

import { Button } from "./Register.style"

export default class RegisterIntro extends React.Component {
  render() {
    const { handleChange, answers, adminQuestions } = this.props
    return (
      <React.Fragment>
        <div>
          <header>
            <h4>Contact Name</h4>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={answers["name"] ? answers["name"] : ""}
            />
          </header>
        </div>
        <div className="adminInfo">
          {adminQuestions.map(question => {
            return (
              <React.Fragment>
                <h4>{question.questionText}</h4>
                <input
                  type="text"
                  name={question._id}
                  onChange={handleChange}
                  value={answers[question._id] ? answers[question._id] : ""}
                />
              </React.Fragment>
            )
          })}
        </div>

        <div className="flex items-center justify-between w-100">
          <Button id="prev-btn" onClick={this.props.handlePrevious}>
            Back
          </Button>
          <Button className="next-btn" onClick={this.props.handleNext}>
            Next
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
