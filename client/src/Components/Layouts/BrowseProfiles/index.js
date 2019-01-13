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

  renderProfiles = profiles => {
    const { admin } = this.state
    return (
      <React.Fragment>
        {profiles.map(profile => {
          const { organisation, wellnessType, avatarURL, profileID, approved } = profile
          if (admin) {
            return (
              <div>
                <Profile
                  key={Math.random()}
                  organisation={organisation}
                  wellnessType={wellnessType}
                  avatar={avatarURL}
                  profileID={profileID}
                  adminStatus={this.state.admin}
                  approved={approved}
                />
              </div>
            )
          } else {
            return (
              <div>
                {approved && (
                  <Profile
                    key={Math.random()}
                    organisation={organisation}
                    wellnessType={wellnessType}
                    avatar={avatarURL}
                    profileID={profileID}
                    adminStatus={this.state.admin}
                    approved={approved}
                  />
                )}
              </div>
            )
          }
        })}
      </React.Fragment>
    )
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
    console.log(this.state)

    if (!loaded) {
      return <div>loading...</div>
    }
    if (profiles.length === 0) {
      return <div>currently there are no profiles</div>
    } else {
      return <div>{this.renderProfiles(profiles)}</div>
    }
  }
}

export default BrowseProfiles
