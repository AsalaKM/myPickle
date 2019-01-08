import React, { Component } from "react"

import { Box, Container, ProfilePhoto, Details } from "./BrowseProfiles.style"

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
      <Box>
        <Container>
          {checkAvatar()}
          <Details>
            <span>{organisation} </span>
            <span>
              {wellnessType.map(item => {
                return <li>{item}</li>
              })}{" "}
            </span>
          </Details>
        </Container>
      </Box>
    )
  }
}
export default Profile
