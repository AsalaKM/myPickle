import React, { Component } from "react"
import work from "./../../../assets/images/work.jpeg"

import { BasicInfo, Avatar } from "./SingleProfile.style"
import axios from "axios"

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
    return (
      <div>
        <BasicInfo>
          <Avatar src={work} alt="" />
          <h4>{this.state.answers.Data.BasicInfo[0].name}</h4>
          <h4>Location</h4>
          <button>Contact</button>
        </BasicInfo>

        {/* <section>Bio</section>
        <section>buttons</section>
        <section>services</section>
        <section>Booking</section>
        <section>contact</section> */}
      </div>
    )
  }
}

export default SinflePforile
