import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import RegisterStepOne from "./RegisterStepOne"

test("Register matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <RegisterStepOne />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
