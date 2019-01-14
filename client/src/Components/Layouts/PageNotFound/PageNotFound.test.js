import React from "react"
import ReactDOM from "react-dom"
import { Error404, Error500 } from "./index"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Error404 />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Error500 />, div)
  ReactDOM.unmountComponentAtNode(div)
})
