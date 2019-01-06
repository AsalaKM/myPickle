import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import Login from "../Layouts/Login/index"
import EditSupportDetails from "../Layouts/EditProfile/SupportDetails"
import EditTargetClients from "../Layouts/EditProfile/TargetClients"
import EditBookingDetails from "../Layouts/EditProfile/BookingAvailability"
import EditSocialMedia from "../Layouts/EditProfile/SocialMedia"
import EditBasicInfo from "../Layouts/EditProfile/BasicInfo"

const App = () => (
  <Router>
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/edit-profile/support-details/:id" exact component={EditSupportDetails} />
      <Route path="/edit-profile/target-clients/:id" exact component={EditTargetClients} />
      <Route path="/edit-profile/availability-booking/:id" exact component={EditBookingDetails} />
      <Route path="/edit-profile/social-media/:id" exact component={EditSocialMedia} />
      <Route path="/edit-profile/basic-info/:id" exact component={EditBasicInfo} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
