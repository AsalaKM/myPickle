import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import Login from "../Layouts/Login/index"
import FindSupport from "../Layouts/FindSupport/index"

const App = () => (
  <Router>
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/find-support" exact component={FindSupport} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
