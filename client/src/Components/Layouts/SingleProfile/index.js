import React, { Component } from "react"
import axios from "axios"

import {
  Container,
  SectionCard,
  TitleCard,
  Avatar,
  Informations,
  Bio,
  Navigate,
  Services,
  help,
  Delivery,
  Booking,
  Contact,
  ContactButton,
  OptionsOfSupport,
  SupportAnswers,
} from "./SingleProfile.style"

import { ProfileButton } from "../../Common/Buttons"

import ProfileSections from "./ProfileSections"

import AnswerSection from "../../Common/Answers/AnswerSection"

class SinflePforile extends Component {
  state = {
    userInfo: {},
    loading: false,
    basicInfoAnswers: [],
    bookingDetails: [],
    socialMedia: [],
    supportDetails: [],
    profileImage: null,
  }

  componentDidMount() {
    const windowPath = window.location.pathname
    const id = windowPath.split("/")[2]

    axios
      .get(`/single-profile/${id}`)
      .then(result => {
        console.log("RESULT", result)
        const questionsAndAnswers = Object.keys(result.data).map(element => {
          if (result.data[element].question) {
            console.log(result.data[element].question[0].questionText)
            console.log(result.data[element].answers || [])
            return {
              question: result.data[element].question[0].questionText,
              answers: result.data[element].answer || [],
            }
          }
        })
        const {
          basicInfoAnswers,
          bookingDetails,
          socialMedia,
          supportDetails,
          profileImage,
        } = result.data
        this.setState({
          questionsAndAnswers,
          userInfo: result.data.BsicInfo[0],
          loading: true,
          basicInfoAnswers,
          bookingDetails,
          socialMedia,
          supportDetails,
          profileImage,
        })
      })
      .catch(err => console.log(err))
  }

  getAnswers = qs => {
    const { questionsAndAnswers } = this.state
    const question = questionsAndAnswers.filter(elem => {
      if (elem) {
        return elem.question === qs
      }
    })[0]
    if (question !== undefined) {
      const ans = question.answers
      return ans
    } else {
      return "no result"
    }
  }

  checkAvatar = () =>
    this.state.profileImage.length > 0 ? (
      <Avatar src={`/static/${this.state.profileImage}`} />
    ) : (
      <Avatar src={require("../../../assets/images/logo_bw.jpg")} />
    )

  render() {
    const { answers, loading } = this.state

    if (!loading) {
      return <div>loading</div>
    } else {
      const { basicInfoAnswers, supportDetails, bookingDetails, socialMedia } = this.state

      return (
        <Container>
          <TitleCard>
            {this.checkAvatar()}
            <Informations>
              <h4> {this.getAnswers("Known organisation name")} </h4>
              {/* <h4>{this.getAnswers("Please select your area(s) of wellness")}</h4> */}
              <div>
                {Array.isArray(this.getAnswers("Please select your area(s) of wellness")) !==
                false ? (
                  this.getAnswers("Please select your area(s) of wellness").map(item => (
                    <div>{item}</div>
                  ))
                ) : (
                  <div>{this.getAnswers("Please select your area(s) of wellness")}</div>
                )}
              </div>
              <h4> {this.getAnswers("Registered address")}</h4>
              <ContactButton>Contact </ContactButton>
            </Informations>
          </TitleCard>

          <Navigate>
            <ProfileButton>Blog</ProfileButton>
            <ProfileButton>Services</ProfileButton>
            <ProfileButton>Booking</ProfileButton>
          </Navigate>

          <SectionCard>
            <h3>Bio</h3>
            <p>{this.getAnswers("Please provide a brief description of the organisation")}</p>
            <div>
              <h4>Core offering: </h4>
              {this.getAnswers("What best describes your core service offering?").map(item => (
                <div>{item}</div>
              ))}
            </div>
          </SectionCard>

          <ProfileSections
            supportDetails={supportDetails}
            basicInfoAnswers={basicInfoAnswers}
            bookingDetails={bookingDetails}
            socialMedia={socialMedia}
          />

          <SectionCard>
            <h3>Contact</h3>
            <h4>phone: {this.state.userInfo.phone}</h4>
            <h4>Email: {this.state.userInfo.email}</h4>
          </SectionCard>
        </Container>
      )
    }
  }
}

export default SinflePforile
