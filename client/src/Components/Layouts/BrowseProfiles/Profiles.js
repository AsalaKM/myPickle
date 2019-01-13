import React, { Component } from "react"
import axios from "axios"
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

import { ApprovalButton } from "../../Common/Buttons"

import history from "../../../history"

class Profile extends Component {
  render() {
    const { organisation, wellnessType, avatar, profileID, adminStatus, approved } = this.props

    const checkAvatar = () =>
      avatar ? (
        <ProfilePhoto src={`/static/${avatar}`} />
      ) : (
        <ProfilePhoto src={require("../../../assets/images/logo_bw.jpg")} />
      )

    const handleApproval = () => {
      axios
        .post(`/approve/${profileID}`, { approved: approved })
        .then(result => window.location.reload())
        .catch(err => console.log(err))
    }

    const checkApproval = () => {
      if (approved) {
        return <ApprovalButton onClick={handleApproval}>disapprove</ApprovalButton>
      } else {
        return <ApprovalButton onClick={handleApproval}>approve</ApprovalButton>
      }
    }

    const viewProfile = e => {
      e.preventDefault()
      history.push(`/profile/${profileID}`)
    }

    return (
      <Box>
        {/* only render defined props --> prevent crash */}
        {organisation && wellnessType && (
          <Container>
            <Avatar>{checkAvatar()}</Avatar>
            <DetailsOne>
              <Name>{organisation} </Name>
              {wellnessType.map(item => {
                return <List key={Math.random()}>{item}</List>
              })}
            </DetailsOne>
            <DetailsTwo>
              <Link onClick={viewProfile}>
                <Arrow src={require("../../../assets/images/arrow.svg")} alt="arrow" />
              </Link>
            </DetailsTwo>
            {adminStatus && checkApproval()}
          </Container>
        )}
      </Box>
    )
  }
}
export default Profile
