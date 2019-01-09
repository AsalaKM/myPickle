import React, { Component } from "react"
import Profile from "./Profiles"

import axios from "axios"

class BrowseProfiles extends Component {
  state = {
    profiles: null,
    loaded: false,
  }

  componentDidMount() {
    // get profiles
    axios
      .get("/profiles")
      .then(result => this.setState({ profiles: result.data, loaded: true }))
      .catch(err => console.log(err))
  }

  render() {
    const { loaded, profiles } = this.state
    if (!loaded) {
      return <div>loading...</div>
    } else {
      return (
        <React.Fragment>
          {profiles.map(profile => {
            const { organisation, wellnessType, avatarURL, profileID } = profile
            return (
              <Profile
                key={Math.random()}
                organisation={organisation}
                wellnessType={wellnessType}
                avatar={avatarURL}
                profileID={profileID}
              />
            )
          })}
        </React.Fragment>
      )
    }
  }
}

export default BrowseProfiles
