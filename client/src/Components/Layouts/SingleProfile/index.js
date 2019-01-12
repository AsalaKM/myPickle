import React, { Component } from "react"
import axios from "axios"

import {
  Container,
  BasicInfo,
  Avatar,
  Informations,
  Bio,
  Navigate,
  Button,
  Services,
  help,
  Delivery,
  Booking,
  Contact,
  ContactButton,
  OptionsOfSupport,
  SupportAnswers,
} from "./SingleProfile.style"

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
        const { basicInfoAnswers, bookingDetails, socialMedia, supportDetails } = result.data
        this.setState({
          questionsAndAnswers,
          userInfo: result.data.BsicInfo[0],
          loading: true,
          basicInfoAnswers,
          bookingDetails,
          socialMedia,
          supportDetails,
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

  render() {
    const { answers, loading } = this.state

    if (!loading) {
      return <div>loading</div>
    } else {
      const { basicInfoAnswers, supportDetails, bookingDetails, socialMedia } = this.state

      return (
        <Container>
          <BasicInfo>
            <Avatar src={this.getAnswers("Organisation photo or logo")} />
            <Informations>
              <h4> {this.getAnswers("Known organisation name")} </h4>
              {/* <h4>{this.getAnswers("Please select your area(s) of wellness")}</h4> */}
              <ul>
                {Array.isArray(this.getAnswers("Please select your area(s) of wellness")) !==
                false ? (
                  this.getAnswers("Please select your area(s) of wellness").map(item => (
                    <li>{item}</li>
                  ))
                ) : (
                  <li>{this.getAnswers("Please select your area(s) of wellness")}</li>
                )}
              </ul>
              <h4> {this.getAnswers("Registered address")}</h4>
              <ContactButton>Contact </ContactButton>
            </Informations>
          </BasicInfo>

          <Bio>
            <div>
              <h4>Core offering: </h4>
              {this.getAnswers("What best describes your core service offering?").map(item => (
                <div>{item}</div>
              ))}
            </div>
            <h3>Bio</h3>
            {this.getAnswers("Please provide a brief description of the organisation")}
          </Bio>
          <Navigate>
            <Button>view blog</Button>
            <Button>services</Button>
            <Button>Booking</Button>
          </Navigate>
          <div>NEW STUFF</div>

          <ProfileSections
            supportDetails={supportDetails}
            basicInfoAnswers={basicInfoAnswers}
            bookingDetails={bookingDetails}
            socialMedia={socialMedia}
          />

          <Contact>
            <h4>phone: {this.state.userInfo.phone}</h4>
            <h4>Email: {this.state.userInfo.email}</h4>
          </Contact>
        </Container>
      )
    }
  }
}

export default SinflePforile
