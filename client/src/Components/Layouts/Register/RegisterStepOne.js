import React from "react"

import { Intro, Button, Answers } from "./Register.style"
import { ErrorMsg } from "../../Common/Questions/Questions.style"

import CheckboxInput from "../../Common/Questions/CheckboxInput"

export default class RegisterStepOne extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { wellnessQuestion, handleChange, answers, checkStage, unanswered } = this.props
    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Wellness Areas</h2>
          {unanswered && unanswered.includes(wellnessQuestion._id) ? (
            <ErrorMsg>
              <p>Please answer this question</p>
            </ErrorMsg>
          ) : (
            ""
          )}
        </Intro>
        {/* <CirclesContainer>
          <CircleLarge />
          <CircleMed />
          <CircleSm />
        </CirclesContainer> */}
        <Answers>
          <CheckboxInput
            question={wellnessQuestion}
            handleChange={handleChange}
            answers={answers}
          />
        </Answers>
        <div className="flex items-center justify-center w-100 mb4">
          <Button id="prev-btn" onClick={this.props.handlePrevious}>
            Back
          </Button>
          <Button className="next-btn" onClick={checkStage}>
            Next
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
