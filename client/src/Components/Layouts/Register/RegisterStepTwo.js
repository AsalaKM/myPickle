import React from "react"

import { Button, RegisterStepTwoWrapper } from "./Register.style"

export default class RegisterStepTwo extends React.Component {
  render() {
    const {
      handleChange,
      answers,
      adminQuestions,
      checkRequiredAnswers,
      unanswered,
      checkStage,
    } = this.props
    return (
      <RegisterStepTwoWrapper>
        <div>
          <header>
            <h4>Contact Name:</h4>
          </header>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={answers["name"] ? answers["name"] : ""}
            onBlur={checkRequiredAnswers}
            required
          />
          {unanswered && unanswered.includes("name") ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <header>
            <h4>Contact Email:</h4>
          </header>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={answers["email"] ? answers["email"] : ""}
            onBlur={checkRequiredAnswers}
          />
          {unanswered && unanswered.includes("email") ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <header>
            <h4>Contact Password:</h4>
          </header>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={answers["password"] ? answers["password"] : ""}
            onBlur={checkRequiredAnswers}
          />
          {unanswered && unanswered.includes("password") ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <header>
            <h4>Confirm Password:</h4>
          </header>
          <input
            type="password"
            name="password2"
            onChange={handleChange}
            value={answers["password2"] ? answers["password2"] : ""}
            onBlur={checkRequiredAnswers}
          />
          {unanswered && unanswered.includes("password2") ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <header>
            <h4>Phone Number:</h4>
          </header>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={answers["phone"] ? answers["phone"] : ""}
            onBlur={checkRequiredAnswers}
          />
          {unanswered && unanswered.includes("phone") ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </div>
        {adminQuestions.map(question => {
          return (
            <div>
              <header>
                <h4>{question.questionText}</h4>
              </header>
              <input
                type="text"
                name={question._id}
                onChange={handleChange}
                value={answers[question._id] ? answers[question._id] : ""}
                onBlur={checkRequiredAnswers}
              />
              <div className="required">
                {unanswered && unanswered.includes(question._id) ? (
                  <p>Please answer this question</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          )
        })}
        <div className="flex items-center justify-between w-100">
          <Button id="prev-btn" onClick={this.props.handlePrevious}>
            Back
          </Button>
          <Button className="next-btn" onClick={checkStage}>
            Next
          </Button>
        </div>
      </RegisterStepTwoWrapper>
    )
  }
}
