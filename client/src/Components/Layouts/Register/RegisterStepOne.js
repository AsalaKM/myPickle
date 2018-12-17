import React from "react"

import { Intro, Button } from "./Register.style"

export default class RegisterIntro extends React.Component {
  render() {
    const { wellnessQuestion, handleChange, answers, checkStage, unanswered } = this.props
    return (
      <React.Fragment>
        <Intro>
          <h2 className="tc mp-primary-color">Wellness Areas</h2>
          <p>
            So we can customize your profile, please select the area(s) of wellness where you
            provide support.
          </p>
          {unanswered && unanswered.includes(wellnessQuestion._id) ? (
            <div className="required">
              <p>Please answer this question</p>
            </div>
          ) : (
            ""
          )}
        </Intro>
        {/* <CirclesContainer>
          <CircleLarge />
          <CircleMed />
          <CircleSm />
        </CirclesContainer> */}
        <div className="answers">
          {wellnessQuestion.options.map(option => {
            return (
              <label htmlFor={option} key={Math.random()}>
                <input
                  value={option}
                  type="checkbox"
                  name={wellnessQuestion._id}
                  onChange={handleChange}
                  checked={
                    answers[wellnessQuestion._id] && answers[wellnessQuestion._id].includes(option)
                  }
                />
                <p>{option}</p>
              </label>
            )
          })}
        </div>
        <div className="flex items-center justify-between w-100">
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
