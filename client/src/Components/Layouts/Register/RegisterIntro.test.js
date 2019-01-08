import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import RegisterIntro from "./RegisterIntro"

test("Register matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <RegisterIntro />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
