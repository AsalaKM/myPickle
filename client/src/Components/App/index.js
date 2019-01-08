import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// set up authorization
import jwt_decode from "jwt-decode"
import setAuthToken from "../../Utils/setAuthToken"

// import components
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import EditProfile from "../Layouts/EditProfile/index"
import EditSupportDetails from "../Layouts/EditProfile/SupportDetails"
import EditTargetClients from "../Layouts/EditProfile/TargetClients"
import EditBookingDetails from "../Layouts/EditProfile/BookingAvailability"
import EditSocialMedia from "../Layouts/EditProfile/SocialMedia"
import EditBasicInfo from "../Layouts/EditProfile/BasicInfo"
import Login from "../Layouts/Login"
import Dashboard from "../Layouts/Dashboard"

class App extends Component {
  state = {
    profileId: null,
    isAuthenticated: false,
    loaded: false,
  }

  componentDidMount() {
    // check to see if valid jwt token in local storage
    if (localStorage.jwtToken) {
      // if so we set it to auth header so we can access it
      setAuthToken(localStorage.jwtToken)
      //decode the jwt so we can put the unique profile id into the state
      const decoded = jwt_decode(localStorage.jwtToken)

      const currentTime = Date.now() / 1000
      // log out user if token expired
      if (decoded.exp < currentTime) {
        // remove from local storage
        localStorage.removeItem("jwtToken")
        // remove from header
        setAuthToken(false)
        // reset state
        this.setState({ isAuthenticated: false, profileId: null, loaded: true })
      } else {
        // get the profile id from the token
        const profileId = decoded.profileId
        this.setState({
          isAuthenticated: true,
          profileId: profileId,
          loaded: true,
        })
      }
    } else {
      // if there's no token then set state
      this.setState({
        isAuthenticated: false,
        loaded: true,
      })
    }
  }

  render() {
    const { isAuthenticated, loaded, profileId } = this.state
    // make sure component has mounted before loading
    if (!loaded) return null
    return (
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/edit-profile" exact component={EditProfile} profileId={profileId} />
          <Route
            path="/edit-profile/support-details/:id"
            exact
            component={EditSupportDetails}
            profileId={profileId}
          />
          <Route
            path="/edit-profile/target-clients/:id"
            exact
            component={EditTargetClients}
            profileId={profileId}
          />
          <Route
            path="/edit-profile/availability-booking/:id"
            exact
            component={EditBookingDetails}
            profileId={profileId}
          />
          <Route
            path="/edit-profile/social-media/:id"
            exact
            component={EditSocialMedia}
            profileId={profileId}
          />
          <Route
            path="/edit-profile/basic-info/:id"
            exact
            component={EditBasicInfo}
            profileId={profileId}
          />
          <Route path="/dashboard" exact component={Dashboard} profileId={profileId} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
