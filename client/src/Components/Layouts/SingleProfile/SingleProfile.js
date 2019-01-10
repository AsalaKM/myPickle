import React, { Component } from "react"
import axios from "axios"
import work from "./../../../assets/images/work.jpeg"

import { BasicInfo, Avatar } from "./SingleProfile.style"

class SinflePforile extends Component {
  state = {
    allAnswers: [],
  }
  componentDidMount() {
    axios
      .get("/api/v1/profiles/${this.props.match.params.id}")
      .then(result => this.setState({ allAnswers: result.data, loaded: true }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <BasicInfo>
          <Avatar src={work} alt="" />
          <h4>name</h4>
          <h4>Location</h4>
          <button>Contact</button>
        </BasicInfo>

        <section>Bio</section>
        <section>buttons</section>
        <section>services</section>
        <section>Booking</section>
        <section>contact</section>
      </div>
    )
  }
}

export default SinflePforile
