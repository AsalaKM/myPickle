import React from "react"

import { Intro } from "../../Common/Headings"
import { Button } from "../../Common/Buttons"

export default class RegisterIntro extends React.Component {
  render() {
    return (
      <Intro>
        <h2 className="tc mp-primary-color">Welcome to myPickle</h2>
        <p>
          Please provide your contact and organisation details first. Then you can begin to list the
          service(s) you provide.
        </p>
        <p>
          If at any point you need assistance, please email{" "}
          <a href="mailto:hello@mypickle.org">hello@mypickle.org</a> with your query and contact
          details.
        </p>
        <Button onClick={this.props.handleNext}>Next</Button>
      </Intro>
    )
  }
}
