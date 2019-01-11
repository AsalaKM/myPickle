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
    answers: {},
    loading: false,
  }

  componentDidMount() {
    const windowPath = window.location.pathname
    const id = windowPath.split("/")[2]

    axios
      .get(`/single-profile/${id}`)
      // .then(result => this.setState({ answers: result.data }))
      .then(result => {
        // console.log(Object.keys(this.state.answers))
        // console.log(this.state.answers)
        const questionsAnswers = Object.keys(result.data).map(element => {
          console.log(result.data[element])

          if (result.data[element].question[0].questionText == "haneen") {
            return result.data[element].answers
          }
        })
        this.setState({ answers: questionsAnswers, loading: true })
        console.log(this.state.answers)
      })
      .catch(err => console.log(err))
  }

  render() {
    // if (this.state.answers.BsicInfo) {
    //   const BsicInfo = this.state.answers.BsicInfo[0]
    //   console.log(BsicInfo.name)
    // }

    const { answers, loading } = this.state
    if (!loading) {
      return <div>loading</div>
    } else {
      const BsicInfo = this.state.answers.BsicInfo[0]

      // console.log(BsicInfo.values({ name: "Josephine Doeski" }))
      // console.log(BsicInfo)

      return (
        <React.Fragment>
          <BasicInfo>
            <Avatar src={work} alt="" />
            <Informations>
              <h4> {BsicInfo.name} </h4>
              <h4> Gaza</h4>
              <h4>wellnes area</h4>
              <button>Contact </button>
            </Informations>
          </BasicInfo>

          <Bio>
            <h2> Bio</h2>
            Hello myPikle
          </Bio>
          <Navigate>
            <Button>view blog</Button>
            <Button>services</Button>
            <Button>Booking</Button>
          </Navigate>
          <Services>
            <help>
              <h4> I have 7 years in practic</h4>
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
          <Contact>Contact</Contact>
        </React.Fragment>
      )
    }
  }
}

export default SinflePforile
