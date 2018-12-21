import React from "react"

import { Button, Answers, Intro } from "./Register.style"
import { TextField, ErrorMsg } from "../../Common/Questions/Questions.style"
import TextInput from "../../Common/Questions/TextInput"
import TextFieldInput from "../../Common/Questions/TextFieldInput"

export default class RegisterStepTwo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const {
      handleChange,
      answers,
      adminQuestions,
      validateInput,
      checkRequiredAnswers,
      errors,
      unanswered,
      checkStage,
    } = this.props
    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Your Details</h2>
        </Intro>
        <Answers>
          <TextField>
            <header>
              <h4>Contact Name:*</h4>
              <p />
            </header>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={answers["name"] ? answers["name"] : ""}
              onBlur={validateInput}
              required
            />
            {unanswered && unanswered.includes("name") ? (
              <ErrorMsg>
                <p>Please answer this question</p>
              </ErrorMsg>
            ) : (
              ""
            )}
          </TextField>
          <TextField>
            <header>
              <h4>Contact Email:*</h4>
              <p />
            </header>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={answers["email"] ? answers["email"] : ""}
              onBlur={validateInput}
            />
            {unanswered && unanswered.includes("email") ? (
              <ErrorMsg>
                <p>Please answer this question</p>
              </ErrorMsg>
            ) : (
              ""
            )}
            {errors && errors.includes("email") ? (
              <ErrorMsg>
                <p>Email is invalid</p>
              </ErrorMsg>
            ) : (
              ""
            )}
          </TextField>
          <TextField>
            <header>
              <h4>Contact Password:*</h4>
              <p />
            </header>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={answers["password"] ? answers["password"] : ""}
              onBlur={validateInput}
            />
            {unanswered && unanswered.includes("password") ? (
              <ErrorMsg>
                <p>Please answer this question</p>
              </ErrorMsg>
            ) : (
              ""
            )}
            {errors && errors.includes("password") ? (
              <ErrorMsg>
                <p>Password must be at least 6 characters</p>
              </ErrorMsg>
            ) : (
              ""
            )}
          </TextField>
          <TextField>
            <header>
              <h4>Confirm Password:*</h4>
              <p />
            </header>
            <input
              type="password"
              name="password2"
              onChange={handleChange}
              value={answers["password2"] ? answers["password2"] : ""}
              onBlur={validateInput}
            />
            {unanswered && unanswered.includes("password2") ? (
              <ErrorMsg>
                <p>Please answer this question</p>
              </ErrorMsg>
            ) : (
              ""
            )}
            {errors && errors.includes("password2") ? (
              <ErrorMsg>
                <p>Passwords do not match</p>
              </ErrorMsg>
            ) : (
              ""
            )}
          </TextField>
          <TextField>
            <header>
              <h4>Phone Number:*</h4>
              <p />
            </header>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={answers["phone"] ? answers["phone"] : ""}
              onBlur={checkRequiredAnswers}
            />
            {unanswered && unanswered.includes("phone") ? (
              <ErrorMsg>
                <p>Please answer this question</p>
              </ErrorMsg>
            ) : (
              ""
            )}
          </TextField>
          {adminQuestions
            .filter(question => question.inputType === "text")
            .map((question, index) => (
              <TextInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
                unanswered={unanswered}
                checkRequiredAnswers={checkRequiredAnswers}
              />
            ))}
          {adminQuestions
            .filter(
              question => question.inputType === "textarea" || question.inputType === "address"
            )
            .map((question, index) => (
              <TextFieldInput
                key={index}
                question={question}
                handleChange={handleChange}
                answers={answers}
                unanswered={unanswered}
                checkRequiredAnswers={checkRequiredAnswers}
              />
            ))}
          <div className="flex items-center justify-between w-100 mb4">
            <Button id="prev-btn" onClick={this.props.handlePrevious}>
              Back
            </Button>
            <Button className="next-btn" onClick={checkStage}>
              Next
            </Button>
          </div>
        </Answers>
      </React.Fragment>
    )
  }
}
