import React, { Fragment } from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Fragment>
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }
    />
  </Fragment>
)

export default PrivateRoute
