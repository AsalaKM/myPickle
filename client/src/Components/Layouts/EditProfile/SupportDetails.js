import React, { Component } from "react"
import axios from "axios"

export default class SupportDetails extends Component {
  state = {
    profileId: "",
    storedAnswers: null,
    supportQuestions: null,
    newAnswerState: {},
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]
    console.log(id)

    axios
      .get(`/edit-profile/support/${id}`)
      .then(supportDetails => this.setState({ supportDetails: supportDetails, profileId: id }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.supportDetails)
    return (
      <React.Fragment>
        <h4>Hello</h4>
        <p>{this.state.profileId}</p>
        <div>{/* {this.state.supportDetails.filter(que)} */}</div>
      </React.Fragment>
    )
  }
}
