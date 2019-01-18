import React, { Component } from "react"
import axios from "axios"

import {
  Container,
  SectionCard,
  TitleCard,
  Avatar,
  Informations,
  Navigate,
  TitleWrapper,
  LocationWrapper,
  NavLink,
  ContactLink,
  UrlLink,
  BlogLink,
} from "./SingleProfile.style"

import { MultiAnswer } from "../../Common/Answers/AnswerSection.style"

import ProfileSections from "./ProfileSections"

import SocialSection from "../../Common/Answers/SocialSection"

class SinflePforile extends Component {
  state = {
    userInfo: {},
    loading: false,
    basicInfoAnswers: [],
    bookingDetails: [],
    socialMedia: [],
    supportDetails: [],
    profileImage: null,
    address: null,
  }

  componentDidMount() {
    const windowPath = window.location.pathname
    const id = windowPath.split("/")[2]

    axios
      .get(`${process.env.REACT_APP_HOST || ""}/single-profile/${id}`)
      .then(result => {
        const questionsAndAnswers = Object.keys(result.data).map(
          (element, index) =>
            result.data[element].question && {
              question: result.data[element].question[0].questionText,
              answers: result.data[element].answer || [],
            }
        )
        const {
          basicInfoAnswers,
          bookingDetails,
          socialMedia,
          supportDetails,
          profileImage,
        } = result.data

        // get address from basicInfoAnswers
        const addressDetails = basicInfoAnswers.filter(
          answer => answer.question[0].questionText === "Registered address"
        )

        this.setState({
          questionsAndAnswers,
          userInfo: result.data.BsicInfo[0],
          loading: true,
          basicInfoAnswers,
          bookingDetails,
          socialMedia,
          supportDetails,
          profileImage,
          address: addressDetails[0].answer,
        })
      })
      .catch(err => console.log(err))
  }

  getAnswers = (section, question) => {
    const { basicInfoAnswers, bookingDetails, supportDetails } = this.state
    let filteredSection

    if (section === "basicInfo") filteredSection = basicInfoAnswers
    if (section === "supportDetails") filteredSection = supportDetails
    if (section === "bookingDetails") filteredSection = bookingDetails

    const questionDetails = filteredSection.filter(
      elem => elem && elem.question[0].questionText === question
    )[0]
    if (questionDetails !== undefined) {
      const ans = questionDetails.answer
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
    const { loading } = this.state

    if (!loading) {
      return <div>loading</div>
    } else {
      const { basicInfoAnswers, supportDetails, bookingDetails, socialMedia, address } = this.state
      return (
        <Container>
          <TitleCard>
            <h2> {this.getAnswers("basicInfo", "Known organisation name")} </h2>
            <TitleWrapper>
              {this.checkAvatar()}
              <Informations>
                <LocationWrapper>
                  <img src={require("../../../assets/images/location_Icon.svg")} alt="location" />
                  <p>{address.city}</p>
                </LocationWrapper>
                <MultiAnswer>
                  {Array.isArray(
                    this.getAnswers("supportDetails", "Please select your area(s) of wellness")
                  ) !== false ? (
                    this.getAnswers("supportDetails", "Please select your area(s) of wellness").map(
                      (item, index) => <div key={index}>{item}</div>
                    )
                  ) : (
                    <div>
                      {this.getAnswers("supportDetails", "Please select your area(s) of wellness")}
                    </div>
                  )}
                </MultiAnswer>
                <ContactLink
                  to="contact"
                  smooth={true}
                  offset={-40}
                  duration={500}
                  className="contact"
                >
                  Contact
                </ContactLink>
                {socialMedia.length > 0 ? <SocialSection socialAnswers={socialMedia} /> : null}
              </Informations>
            </TitleWrapper>
          </TitleCard>

          <Navigate>
            <BlogLink href="/blog">Blog</BlogLink>
            <NavLink to="support" smooth={true} offset={-40} duration={500}>
              Support Details
            </NavLink>
            <NavLink to="booking" smooth={true} offset={-40} duration={500}>
              Booking
            </NavLink>
          </Navigate>

          <SectionCard>
            <h3>Bio</h3>
            <p>
              {this.getAnswers(
                "basicInfo",
                "Please provide a brief description of the organisation"
              )}
            </p>
            <div>
              <h4>Core offering: </h4>
              <MultiAnswer>
                {this.getAnswers(
                  "basicInfo",
                  "What best describes your core service offering?"
                ).map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </MultiAnswer>
            </div>
          </SectionCard>

          <ProfileSections
            supportDetails={supportDetails}
            basicInfoAnswers={basicInfoAnswers}
            bookingDetails={bookingDetails}
            socialMedia={socialMedia}
          />

          <SectionCard id="contact">
            <h3>Contact</h3>
            <h4>Phone: {this.state.userInfo.phone}</h4>
            <h4>
              Email:{" "}
              <UrlLink href={`mailto:${this.state.userInfo.email}`}>
                {this.state.userInfo.email}
              </UrlLink>
            </h4>
          </SectionCard>
        </Container>
      )
    }
  }
}

export default SinflePforile
