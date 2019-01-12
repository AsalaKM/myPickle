import React, { Component } from "react"

import AnswerSection from "../../Common/Answers/AnswerSection"

export default class ProfileSections extends Component {
  render() {
    const { basicInfoAnswers, supportDetails, bookingDetails, socialMedia } = this.props

    console.log("booking", bookingDetails)
    return (
      <React.Fragment>
        {supportDetails.length > 0 ? (
          <div>
            <h3>Support Details</h3>
            <AnswerSection answers={supportDetails} />
          </div>
        ) : null}
        {bookingDetails.length > 0 ? (
          <div>
            <h3>Availability & Booking</h3>
            <AnswerSection answers={bookingDetails} />
          </div>
        ) : null}
        {socialMedia.length > 0 ? (
          <div>
            <h3>Social Media:</h3>
            <AnswerSection answers={socialMedia} />
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}
