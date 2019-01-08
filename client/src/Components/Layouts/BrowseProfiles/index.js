import React, { Component } from "react"
import Profile from "./Profiles"
import { Button } from "./BrowseProfiles.style"

import axios from "axios"

class FindSupport extends Component {
  state = {
    profiles: null,
    articles: null,
    loaded: false,
  }

  componentDidMount() {
    // get profiles
    axios
      .get("/profiles")
      .then(result => this.setState({ profiles: result.data, loaded: true }))
      .catch(err => console.log(err))
    // get blog posts
    // axios
    //   .get("/find-support-blogposts")
    //   .then(result => this.setState({ profiles: result.data }))
    //   .catch(err => console.log(err))
  }

  render() {
    const { loaded, profiles, articles } = this.state
    // const { organisation, wellnessType, avatarURL } = profiles
    console.log(profiles)
    if (!loaded) {
      return <div>loading...</div>
    } else {
      return (
        <React.Fragment>
          <div>
            <Button>FILTER</Button>
          </div>
          {profiles.map(profile => {
            const { organisation, wellnessType, avatarURL } = profile
            return (
              <div>
                <Profile
                  organisation={organisation}
                  wellnessType={wellnessType}
                  avatar={avatarURL}
                />
              </div>
            )
          })}
        </React.Fragment>
      )
    }
  }
}

export default FindSupport
