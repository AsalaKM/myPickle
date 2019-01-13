import React, { Component } from "react"
import Profile from "./Profiles"
import jwt_decode from "jwt-decode"
import axios from "axios"

class BrowseProfiles extends Component {
  state = {
    profiles: null,
    loaded: false,
    admin: false,
  }

  checkAmin = name => {
    if (name === "Admin") {
      this.setState({
        admin: true,
      })
    }
  }

  componentDidMount() {
    // get profiles
    axios
      .get("/profiles")
      .then(result => this.setState({ profiles: result.data, loaded: true }))
      .catch(err => console.log(err))

    // check user
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken)
      const name = decoded.name
      this.checkAmin(name)
    }
  }

  render() {
    const { loaded, profiles } = this.state
    if (!loaded) {
      return <div>loading...</div>
    } else if (profiles.length === 0) {
      return <div>currently there are no profiles</div>
    } else {
      return (
        <React.Fragment style={`padding-bottom: 3rem`}>
          {profiles.map(profile => {
            const { organisation, wellnessType, avatarURL, profileID, approved } = profile
            return (
              <div>
                {approved && (
                  <Profile
                    key={Math.random()}
                    organisation={organisation}
                    wellnessType={wellnessType}
                    avatar={avatarURL}
                    profileID={profileID}
                  />
                )}
              </div>
            )
          })}
        </React.Fragment>
      )
    }
  }
}

export default BrowseProfiles
