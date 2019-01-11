import React from "react"
import ReactDOM from "react-dom"
import Landing from "./index"
import { StaticRouter } from "react-router"
// import { Link } from "react-router-dom"

it("renders without crashing", () => {
  const div = document.createElement("div")
  const context = {}
  ReactDOM.render(
    <StaticRouter location="/" context={context}>
      <Landing />
    </StaticRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
