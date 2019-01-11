import React, { Fragment } from "react"
import { Route } from "react-router-dom"

import Footer from "../Footer/index"

const PublicRoutes = ({ component: Component, footer, ...rest }) => {
  return (
    <Fragment>
      <Route {...rest} render={props => <Component {...props} />} />
      {footer && <Footer />}
    </Fragment>
  )
}

export default PublicRoutes
