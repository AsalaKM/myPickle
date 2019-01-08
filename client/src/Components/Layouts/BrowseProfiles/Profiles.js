import React, { Component } from "react"

import { Box, Container, ProfilePhoto, Details, Name, WellnessList } from "./BrowseProfiles.style"

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
            <Name>{organisation} </Name>
          </Details>
          <Details>
            {wellnessType.map(item => {
              return <WellnessList>{item}</WellnessList>
            })}
          </Details>
        </Container>
      </Box>
    )
  }
}
export default Profile
