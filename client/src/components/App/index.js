import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../PageNotFound"
import LandingPage from "../Layouts/LandingPage/Landing"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
