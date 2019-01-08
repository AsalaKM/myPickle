import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageNotFound from "../Layouts/PageNotFound/index"
import Register from "../Layouts/Register/index"
import Login from "../Layouts/Login/index"
import PostArticles from "../Layouts/PostAtricle"

const App = () => (
  <Router>
    <Switch>
      <Route path="/postarticles" exact component={PostArticles} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
export default App
