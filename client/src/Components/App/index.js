import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"

const App = () => (
  <Router>
    <Switch>
      <Route path="/register" exact component={Register} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
