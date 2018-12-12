import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../PageNotFound"

const App = () => (
  <Router>
    <Switch>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
