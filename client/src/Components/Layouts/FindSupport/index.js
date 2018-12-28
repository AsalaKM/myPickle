import React, { Component } from "react"
import Profiles from "./Profiles"

import axios from "axios"

class FindSupport extends Component {
  state = {
    profiles: null,
    articles: null,
  }

  componentDidMount() {
    // get profiles
    axios
      .get("/find-support-profiles")
      .then(result => this.setState({ profiles: result.data }))
      .catch(err => console.log(err))
    // get blog posts
    // axios
    //   .get("/find-support-blogposts")
    //   .then(result => this.setState({ profiles: result.data }))
    //   .catch(err => console.log(err))
  }
  render() {
    return (
      <React.Fragment>
        <Profiles />
      </React.Fragment>
    )
  }
}

export default FindSupport
