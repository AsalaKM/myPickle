import React from "react"

import { Intro, Button } from "./Register.style"

export default class RegisterIntro extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Intro>
        <h2 className="tc mp-primary-color">Wellness Areas</h2>
        <p>
          So we can customize your profile, please select the area(s) of wellness where you provide
          support.
        </p>
        <div className="flex items-center justify-between w-100">
          <Button onClick={this.props.handlePrevious}>Back</Button>
          <Button onClick={this.props.handleNext}>Next</Button>
        </div>
      </Intro>
    )
  }
}
