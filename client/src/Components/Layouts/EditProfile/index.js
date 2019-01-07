import React, { Component } from "react"
import {
  Header,
  EditContainer,
  BasicInfo,
  TwoButton,
  LeftButton,
  RightButton,
} from "./EditProfile.style"

class EditProfile extends Component {
  render() {
    return (
      <EditContainer>
        <Header>
          <h2>Edit your profile</h2>
        </Header>

        <BasicInfo to={`/edit-profile/basic-info`}>
          <p>Basic Info</p>
        </BasicInfo>
        <br />
        <TwoButton>
          <LeftButton to={`/edit-profile/support-details`}>
            <p>Support Details</p>
          </LeftButton>
          <RightButton to={`/edit-profile/availability-booking`}>
            <p>Booking & Availability</p>
          </RightButton>
        </TwoButton>
        <br />
        <TwoButton>
          <LeftButton to={`/edit-profile/target-audience`}>
            <p>Target Audience</p>
          </LeftButton>
          <RightButton to={`/edit-profile/social-media`}>Social</RightButton>
        </TwoButton>
      </EditContainer>
    )
  }
}

export default EditProfile
