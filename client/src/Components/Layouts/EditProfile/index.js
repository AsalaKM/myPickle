import React, { Component } from "react"
import { EditContainer,BasicInfo,Button,TwoButton } from './EditProfile.style'

class  EditProfile extends Component {



  render() {
    return (
      <EditContainer>

        <h2>Edit your profile</h2>

        <BasicInfo>Basic Info</BasicInfo>
        <br/>
        <TwoButton>
        <Button>Support Details</Button>
        <Button> Booking & Availability</Button>
      </TwoButton>
        <br/>
        <TwoButton>
        <Button>Target Audience</Button>
        <Button>Social</Button>
        </TwoButton>
      </EditContainer>

    )
  }
}

export default EditProfile
