import React, { Component } from "react"
import Profile from "./Profiles"
import { Profiles } from "./BrowseProfiles.style"

import axios from "axios"
import { Container } from "./BrowseProfiles.style"

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
    } else if (profiles.length === 0) {
      return <div>currently there are no profiles</div>
    } else {
      return (
        <Profiles>
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
        </Profiles>
      )
    }
  }
}

export default BrowseProfiles
