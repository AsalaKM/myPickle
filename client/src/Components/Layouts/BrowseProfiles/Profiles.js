import React, { Component } from "react"

import {
  Box,
  Container,
  ProfilePhoto,
  DetailsOne,
  DetailsTwo,
  Name,
  WellnessList,
  Avatar,
  More,
  Form,
} from "./BrowseProfiles.style"

import history from "../../../history"

class Profile extends Component {
  render() {
    const { organisation, wellnessType, avatar, profileID } = this.props
    console.log(avatar)

    const checkAvatar = () =>
      avatar ? (
        <ProfilePhoto src={`/static/${avatar}`} />
      ) : (
        <ProfilePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const viewProfile = e => {
      e.preventDefault()
      history.push(`profile/${profileID}`)
    }

    return (
      <Box>
        <Container>
          <Avatar>{checkAvatar()}</Avatar>
          <DetailsOne>
            <Name>{organisation} </Name>
            {wellnessType.map(item => {
              return <WellnessList key={Math.random()}>{item}</WellnessList>
            })}
          </DetailsOne>
          <DetailsTwo>
            <Form>
              <More onClick={viewProfile}>View Profile</More>
            </Form>
          </DetailsTwo>
        </Container>
      </Box>
    )
  }
}
export default Profile
