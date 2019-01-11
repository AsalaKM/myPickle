import React, { Component } from "react"
import work from "./../../../assets/images/work.jpeg"

// import { BasicInfo, Avatar } from "./SingleProfile.style"
import axios from "axios"
// import profileComponent from "./SingleProfile"
import { BasicInfo, Avatar, Informations, Bio, Navigate, Button } from "./SingleProfile.style"

class SinflePforile extends Component {
  state = {
    answers: {},
  }

  componentDidMount() {
    const windowPath = window.location.pathname
    const id = windowPath.split("/")[2]

    axios
      .get(`/single-profile/${id}`)
      .then(result => this.setState({ answers: result.data }))
      // .then(res => {
      //   console.log(res)
      // })
      .catch(err => console.log(err))
  }

  render() {
    const { name, phone } = this.state.data.BasicInfo

    return (
      <React.Fragment>
        <BasicInfo>
          <Avatar src={work} alt="" />
          <Informations>
            <h4> Haneen</h4>
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
        <section>services</section>
        <section>Booking</section>
        <section>Contact</section>
      </React.Fragment>
    )
  }
}

export default SinflePforile
