import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import LandingPage from "../Layouts/LandingPage/Landing"

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={LandingPage} navbar />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
