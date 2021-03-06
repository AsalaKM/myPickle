import React, { Component } from "react"
import { Router, Route, Switch } from "react-router-dom"

// set up authorization
import jwt_decode from "jwt-decode"
import setAuthToken from "../../Utils/setAuthToken"

// import layouts
import history from "../../history"
import { Error404, Error500 } from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import Login from "../Layouts/Login"
import FirstTimeLogin from "../Layouts/FirstTimeLogin/FirstTimeLogin"
import Dashboard from "../Layouts/Dashboard"
import PostArticles from "../Layouts/PostAtricle"
import EditProfile from "../Layouts/EditProfile/index"
import EditSupportDetails from "../Layouts/EditProfile/SupportDetails"
import EditTargetClients from "../Layouts/EditProfile/TargetClients"
import EditBookingDetails from "../Layouts/EditProfile/BookingAvailability"
import EditSocialMedia from "../Layouts/EditProfile/SocialMedia"
import EditBasicInfo from "../Layouts/EditProfile/BasicInfo"
import Landing from "../Layouts/LandingPage/index"
import Navbar from "../Layouts/Navbar-v2"
import BrowseProfiles from "../Layouts/BrowseProfiles"
import BrowseBlogPosts from "../Layouts/BrowseBlogPosts"
import FindSupport from "../Layouts/FindSupport/index"
import BlogPost from "../Layouts/Article/index"
import Profile from "../Layouts/SingleProfile/index"
import AboutmyPikle from "../Layouts/About/index"

// import common components
import PrivateRoute from "../Common/PrivateRoute/PrivateRoute"
import PublicRoute from "../Common/PublicRoutes/index"

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
      <Router history={history}>
        <div>
          <Navbar isAuthenticated={isAuthenticated} user={profileId} />
          <Switch>
            {/* Public routes to go here */}
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={AboutmyPikle} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/newlogin" exact component={FirstTimeLogin} />
            <PublicRoute path="/find-support" exact component={FindSupport} footer />

            <PublicRoute path="/profiles" exact component={BrowseProfiles} footer />
            <PublicRoute path="/profile/:profileID" exact component={Profile} footer />
            <PublicRoute path="/blog" exact component={BrowseBlogPosts} footer />
            <PublicRoute path="/blog/:id" exact component={BlogPost} footer />

            {/* Private routes to go here */}
            <PrivateRoute
              path="/edit-profile"
              exact
              component={EditProfile}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit-profile/support-details"
              exact
              component={EditSupportDetails}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit-profile/target-clients"
              exact
              component={EditTargetClients}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit-profile/availability-booking"
              exact
              component={EditBookingDetails}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit-profile/social-media"
              exact
              component={EditSocialMedia}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/edit-profile/basic-info"
              exact
              component={EditBasicInfo}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/dashboard"
              exact
              component={Dashboard}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />
            <PrivateRoute
              path="/postarticles"
              exact
              component={PostArticles}
              profileId={profileId}
              isAuthenticated={isAuthenticated}
            />

            {/* Final route for pages they don't find */}
            <Route path="/500" component={Error500} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
