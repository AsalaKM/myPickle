import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import history from "../../history"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import PostArticles from "../Layouts/PostAtricle"
import EditProfile from "../Layouts/EditProfile/index"
import EditSupportDetails from "../Layouts/EditProfile/SupportDetails"
import EditTargetClients from "../Layouts/EditProfile/TargetClients"
import EditBookingDetails from "../Layouts/EditProfile/BookingAvailability"
import EditSocialMedia from "../Layouts/EditProfile/SocialMedia"
import EditBasicInfo from "../Layouts/EditProfile/BasicInfo"
import Login from "../Layouts/Login"
import Dashboard from "../Layouts/Dashboard"
import BrowseProfiles from "../Layouts/BrowseProfiles"
import Landing from "../Layouts/LandingPage/index"
import BlogPost from "../Layouts/Article/index"

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/postarticles" exact component={PostArticles} />
      <Route path="/blog/:id" exact component={BlogPost} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/edit-profile" exact component={EditProfile} />
      <Route path="/edit-profile/support-details/:id" exact component={EditSupportDetails} />
      <Route path="/edit-profile/target-clients/:id" exact component={EditTargetClients} />
      <Route path="/edit-profile/availability-booking/:id" exact component={EditBookingDetails} />
      <Route path="/edit-profile/social-media/:id" exact component={EditSocialMedia} />
      <Route path="/edit-profile/basic-info/:id" exact component={EditBasicInfo} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/profiles" exact component={BrowseProfiles} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
