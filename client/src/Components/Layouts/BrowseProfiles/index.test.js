import React from "react"
import renderer from "react-test-renderer"
import { StaticRouter } from "react-router-dom"

import BrowseProfiles from "./index"

test("Dashboard matches snapshot", () => {
  const context = {}
  const component = renderer.create(
    <StaticRouter context={context}>
      <BrowseProfiles />
    </StaticRouter>
  )
  expect(component).toMatchSnapshot()
})
