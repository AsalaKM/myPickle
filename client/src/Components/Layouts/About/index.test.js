import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import AboutmyPikle from "./index"

test("AboutmyPikle matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <AboutmyPikle />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
