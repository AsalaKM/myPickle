import React, { Component } from "react"
import axios from "axios"

class TargetClients extends Component {
  state = {
    profileId: "",
    targetAnswers: null,
    targetQuestions: null,
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const id = pathName.split("/")[3]

    axios
      .get(`/get-questions/targets-clients/${id}`)
      .then(questions => this.setState({ targetQuestions: questions.data }))
      .catch(err => console.log(err))

    axios
      .get(`/edit-profile/target/${id}`)
      .then(answers => this.setState({ targetAnswers: answers.data, profileId: id }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <h4>{this.state.profileId}</h4>
      </React.Fragment>
    )
  }
}

export default TargetClients
