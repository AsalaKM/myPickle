import React, { Component } from "react"

import { SupportContainer, ProfilePhoto } from "./FindSupport.style"

class Profile extends Component {
  render() {
    const { organisation, wellnessType, avatar } = this.props

    const checkAvatar = () =>
      avatar ? (
        <ProfilePhoto src={require(`../../../assets/images/profiles/${avatar}`)} />
      ) : (
        <ProfilePhoto src={require("../../../assets/images/profiles/placeholder.jpg")} />
      )

    return (
      <div>
        <SupportContainer>
          <h3>{organisation}</h3>
          {wellnessType.map(item => {
            return <li>{item}</li>
          })}
          {checkAvatar()}
        </SupportContainer>
      </div>
    )
  }
}
export default Profile
