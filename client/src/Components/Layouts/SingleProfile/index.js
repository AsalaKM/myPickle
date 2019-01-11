import React, { Component } from "react"
import work from "./../../../assets/images/work.jpeg"

// import { BasicInfo, Avatar } from "./SingleProfile.style"
import axios from "axios"
// import profileComponent from "./SingleProfile"
import {
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
        console.log(result, "lfsl")

        const questionsAndAnswers = Object.keys(result.data).map(element => {
          if (result.data[element].question) {
            console.log(result.data[element].question[0].questionText)
            console.log(result.data[element].answers || [])

            return {
              question: result.data[element].question[0].questionText,
              answers: result.data[element].answer || [],
            }
          }
          // return {}
        })
        this.setState({
          questionsAndAnswers,
          BasicInfo: result.data.BsicInfo[0],
          loading: true,
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
    const ans = question.answers
    return ans
  }

  render() {
    const { answers, loading } = this.state

    if (!loading) {
      return <div>loading</div>
    } else {
      console.log(this.state)

      return (
        <React.Fragment>
          <BasicInfo>
            <Avatar src={work} alt="" />
            <Informations>
              <h4> {this.state.BasicInfo.name} </h4>
              <h4>{this.getAnswers("Please select your area(s) of wellness")}</h4>
              <h4> {this.getAnswers("Registered address")}</h4>
              <button>Contact </button>
            </Informations>
          </BasicInfo>

          <Bio>
            <h2> Bio</h2>
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
                // console.log(elem,'ssss')

                if (elem) {
                  return (
                    <div>
                      <h4>{elem.question}</h4>
                      {Array.isArray(elem.answers) ? (
                        elem.answers.map(ans => (
                          <div>
                            <h4>{ans}</h4>
                          </div>
                        ))
                      ) : (
                        <h4>{elem.answer}</h4>
                      )}
                    </div>
                  )
                }
              })}
              <h4>At a high level, what do i help with? </h4>
              <button>Managing feelings & behaviours </button>
              <button>Coping with life challenges</button>
              <button>Mental illness diagnosis & treatment</button>
            </help>
            <Delivery>
              <h4> Method of delivery </h4>
              <button>Face-to-face therapy</button>
              <button>Home visits therapy</button>
            </Delivery>
          </Services>
          <Booking>
            <h3>Booking </h3>
            <h4>Cost per session (per hour): £80-99</h4>
            <h4>Hours of operation </h4>
          </Booking>
          <Contact>
            <h4>{this.state.BasicInfo.phone}</h4>
            <h4>{this.state.BasicInfo.email}</h4>
          </Contact>
        </React.Fragment>
      )
    }
  }
}

export default SinflePforile
