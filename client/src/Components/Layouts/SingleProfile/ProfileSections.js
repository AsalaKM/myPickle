import React, { Component } from "react"

import AnswerSection from "../../Common/Answers/AnswerSection"

import { SectionCard } from "./SingleProfile.style.js"

export default class ProfileSections extends Component {
  render() {
    const { supportDetails, bookingDetails } = this.props

    return (
      <React.Fragment>
        {supportDetails.length > 0 ? (
          <SectionCard id="support">
            <h3>Support Details</h3>
            <AnswerSection answers={supportDetails} />
          </SectionCard>
        ) : null}
        {bookingDetails.length > 0 ? (
          <SectionCard id="booking">
            <h3>Availability & Booking</h3>
            <AnswerSection answers={bookingDetails} />
          </SectionCard>
        ) : null}
      </React.Fragment>
    )
  }
}
