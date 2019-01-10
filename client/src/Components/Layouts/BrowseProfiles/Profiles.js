import React, { Component } from "react"

import {
  Box,
  Container,
  ProfilePhoto,
  DetailsOne,
  DetailsTwo,
  Name,
  List,
  Avatar,
  More,
  Form,
} from "./BrowseProfiles.style"

import history from "../../../history"

class Profile extends Component {
  render() {
    const { organisation, wellnessType, avatar, profileID } = this.props

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
              return <List key={Math.random()}>{item}</List>
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
