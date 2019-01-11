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
  Link,
  Arrow,
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
        <Link onClick={viewProfile}>
          <Container>
            <Avatar>{checkAvatar()}</Avatar>
            <DetailsOne>
              <Name>{organisation} </Name>
              {wellnessType.map(item => {
                return <List key={Math.random()}>{item}</List>
              })}
            </DetailsOne>
            <DetailsTwo>
              <Arrow src={require("../../../assets/images/arrow.svg")} alt="arrow" />
            </DetailsTwo>
          </Container>
        </Link>
      </Box>
    )
  }
}
export default Profile
