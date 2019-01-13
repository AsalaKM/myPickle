import React, { Component } from "react"

import AnswerSection from "../../Common/Answers/AnswerSection"

import { SectionCard } from "./SingleProfile.style.js"

export default class ProfileSections extends Component {
  render() {
    const { basicInfoAnswers, supportDetails, bookingDetails, socialMedia } = this.props

    console.log("booking", bookingDetails)
    return (
      <React.Fragment>
        {supportDetails.length > 0 ? (
          <SectionCard>
            <h3>Support Details</h3>
            <AnswerSection answers={supportDetails} />
          </SectionCard>
        ) : null}
        {bookingDetails.length > 0 ? (
          <SectionCard>
            <h3>Availability & Booking</h3>
            <AnswerSection answers={bookingDetails} />
          </SectionCard>
        ) : null}
        {socialMedia.length > 0 ? (
          <SectionCard>
            <h3>Social Media</h3>
            <AnswerSection answers={socialMedia} />
          </SectionCard>
        ) : null}
      </React.Fragment>
    )
  }
}
