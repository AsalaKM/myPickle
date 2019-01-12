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

class SinflePforile extends Component {
  state = {
    BasicInfo: {},
    loading: false,
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
        this.setState({
          questionsAndAnswers,
          BasicInfo: result.data.BsicInfo[0],
          loading: true,
        })
      })
      .catch(err => console.log(err))

    axios.get(`/single-profile/${id}`).then(profile => {
      const basicInfo = Object.keys(profile.data).map(answer => {
        console.log("amswer", answer.question && answer.question)
        return answer.question
      })
      console.log("basicInfo", basicInfo)
    })
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
      console.log(this.state)

      return (
        <Container>
          <BasicInfo>
            <Avatar src={this.getAnswers("Organisation photo or logo")} />
            <Informations>
              <h4> {this.state.BasicInfo.name} </h4>
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
            <h3> Bio</h3>
            {this.getAnswers("Please provide a brief description of the organisation")}
          </Bio>
          <Navigate>
            <Button>view blog</Button>
            <Button>services</Button>
            <Button>Booking</Button>
          </Navigate>
          <Services>
            <help>
              {this.state.questionsAndAnswers.map(elem => {
                if (elem) {
                  return (
                    <div>
                      {/* <h4>{elem.question}</h4> */}
                      {Array.isArray(elem.answers) ? (
                        elem.answers.map(ans => <div>{/* <h4>{ans}</h4> */}</div>)
                      ) : (
                        <h4>{elem.answer}</h4>
                      )}
                    </div>
                  )
                }
              })}
              <h4> I have {this.getAnswers("Years in practice")} years in practice</h4>
              <h4>At a high level, what do i help with? </h4>
              <div>
                <SupportAnswers>
                  {Array.isArray(
                    this.getAnswers("What areas does your support relate to (max 5)?")
                  ) !== false ? (
                    this.getAnswers("What areas does your support relate to (max 5)?").map(item => (
                      <OptionsOfSupport>{item}</OptionsOfSupport>
                    ))
                  ) : (
                    <h4>{this.getAnswers("What areas does your support relate to (max 5)?")}</h4>
                  )}
                </SupportAnswers>
              </div>
            </help>
            <Delivery>
              <h4>Method of delivery </h4>
              <OptionsOfSupport> {this.getAnswers("Delivery method(s)")} </OptionsOfSupport>
            </Delivery>
          </Services>
          <Booking>
            <h3>Booking </h3>
            <h4>
              Cost per session (per hour):{this.getAnswers("Cost per session (per hour approx)")}
            </h4>
            <h4>{this.getAnswers("Average wait time")} </h4>
          </Booking>
          <Contact>
            <h4>phone: {this.state.BasicInfo.phone}</h4>
            <h4>Email: {this.state.BasicInfo.email}</h4>
          </Contact>
        </Container>
      )
    }
  }
}

export default SinflePforile
