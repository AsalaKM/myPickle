import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import EditProfile from "../Layouts/EditProfile/index"
import Login from "../Layouts/Login"
import Dashboard from "../Layouts/Dashboard"

const App = () => (
  <Router>
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/edit-profile" exact component={EditProfile} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
