import React, { Component } from "react"

import { SupportContainer, ProfilePhoto } from "./BrowseProfiles.style"

class Profile extends Component {
  render() {
    const { organisation, wellnessType, avatar } = this.props

    const checkAvatar = () =>
      avatar ? (
        <ProfilePhoto src={`/static/${avatar}`} />
      ) : (
        <ProfilePhoto src={require("../../../assets/images/logo_bw.jpg")} />
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
