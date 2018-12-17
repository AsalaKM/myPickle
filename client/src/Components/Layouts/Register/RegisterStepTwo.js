import React from "react"

import { Button } from "./Register.style"

export default class RegisterIntro extends React.Component {
  render() {
    const { handleChange, answers } = this.props
    return (
      <React.Fragment>
        <div>
          <header>
            <h4>Contact Name:</h4>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={answers["name"] ? answers["name"] : ""}
            />
          </header>
        </div>
        <div>
          <header>
            <h4>Contact Email:</h4>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={answers["email"] ? answers["email"] : ""}
            />
          </header>
        </div>
        <div>
          <header>
            <h4>Contact Password:</h4>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={answers["password"] ? answers["password"] : ""}
            />
          </header>
        </div>
        <div>
          <header>
            <h4>Confirm Password:</h4>
            <input
              type="password"
              name="password2"
              onChange={handleChange}
              value={answers["password2"] ? answers["password2"] : ""}
            />
          </header>
        </div>
        <div>
          <header>
            <h4>Phone Number:</h4>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={answers["phone"] ? answers["phone"] : ""}
            />
          </header>
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
