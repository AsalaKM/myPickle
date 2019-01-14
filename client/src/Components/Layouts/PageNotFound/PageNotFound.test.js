import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import { Error404, Error500 } from "./index"

test("404 matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <Error404 />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})

test("500 matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <Error500 />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
