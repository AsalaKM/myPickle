import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import Login from "./index"

test("Login matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <Login />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
