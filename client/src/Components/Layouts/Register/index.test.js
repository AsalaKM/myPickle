import React from "react"
import { StaticRouter as Router } from "react-router-dom"
import { render, cleanup, fireEvent } from "react-testing-library"

import Register from "./index"

// clean up the react-testing-library DOM after each test
afterEach(cleanup)

// mock the window.scrollTo method
global.window.scrollTo = jest.fn()

// smoke test to make sure that the component renders without throwing an error
// you could add a snapshot if you want
test("component renders without crashing", () => {
  render(
    <Router context={{}}>
      <Register />
    </Router>
  )
})

// user journey tests

test("user can click Next to progress to the first question", async () => {
  const { getByText } = await render(
    <Router context={{}}>
      <Register />
    </Router>
  )
  // get the Next button on first screen and go forward one
  const nextButton = getByText("Next")
  fireEvent.click(nextButton)
  // // user should see h2 with Wellness Areas
  expect(getByText("Wellness Areas")).toBeDefined()
})

test("user cannot progress to the second question without answering", async () => {
  const { getByText } = await render(
    <Router context={{}}>
      <Register />
    </Router>
  )
  // get the Next button on first screen and go forward one
  const nextButton = getByText("Next")
  fireEvent.click(nextButton)
  // // user should see h2 with Wellness Areas
  const nextButton2 = getByText("Next")
  fireEvent.click(nextButton2)
  expect(getByText("Please answer this question")).toBeDefined()
})

test("user can select options and progress to question 2", async () => {
  const { getByText, getByLabelText } = await render(
    <Router context={{}}>
      <Register />
    </Router>
  )
  // get the Next button on first screen and go forward one
  const nextButton = getByText("Next")
  fireEvent.click(nextButton)
  // user will see multi-select and can click choices
  const emotional = getByLabelText("Emotional")
  fireEvent.click(emotional)
  const nextButton2 = getByText("Next")
  fireEvent.click(nextButton2)
  // user should see text for the next screen of questions
  expect(getByText("Your Details")).toBeDefined()
})

test("user cannot progress to question 3 without answering", async () => {
  const { getByText, getByLabelText } = await render(
    <Router context={{}}>
      <Register />
    </Router>
  )
  // get the Next button on first screen and go forward one
  const nextButton = getByText("Next")
  fireEvent.click(nextButton)
  // user will see multi-select and can click choices
  const emotional = getByLabelText("Emotional")
  fireEvent.click(emotional)
  const nextButton2 = getByText("Next")
  fireEvent.click(nextButton2)
  // user should see text for the next screen of questions
  const nextButton3 = getByText("Next")
  fireEvent.click(nextButton3)
  expect(getByText("Please answer this question")).toBeDefined()
})
