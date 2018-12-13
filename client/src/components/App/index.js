import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import LandingPage from "../Layouts/LandingPage/Landing"
import test from "../Layouts/LandingPage/test"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} navbar />
      <Route path="/test" exact component={test} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
