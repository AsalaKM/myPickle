import React from "react"
// import renderer from "react-test-renderer"
// import { StaticRouter } from "react-router-dom"
import { shallow, mount } from "enzyme"

import Register from "./index"
import RegisterStepOne from "./RegisterStepOne"

const mockUpdatePosition = jest.fn()

describe("Register component", () => {
  test("should render correctly", () => {
    const component = shallow(<Register />)
    expect(component).toMatchSnapshot()
  })

  test("check position one renders", () => {
    const component = shallow(<Register />)
    // const context = {}
    // const innerComponent = shallow(<RegisterStepOne />)
    component.setState({ position: 1 })

    const newComponent = shallow(
      <Register>
        <RegisterStepOne />
      </Register>
    )
    expect(newComponent).toMatchSnapshot()
  })

  test("check position two renders", () => {
    const component = shallow(<Register />)
    // const context = {}
    // const innerComponent = shallow(<RegisterStepOne />)
    component.setState({ position: 2 })

    const newComponent = shallow(
      <Register>
        <h1>Great progress!</h1>
      </Register>
    )
    expect(newComponent).toMatchSnapshot()
  })

  // test("handleNext function", () => {
  //   const component = mount(<Register />)
  //   const innerComp = shallow(<RegisterStepOne />)

  //   console.log(innerComp.debug())

  //   console.log("BEFORE", component.state().position)

  //   innerComp.find(".next-btn").simulate("click")

  //   console.log("AFTER", component.state().position)

  //   const newComponent = shallow(
  //     <Register>
  //       <RegisterStepOne />
  //     </Register>
  //   )
  //   expect(newComponent).toMatchSnapshot()

  //   // expect(component.state().position).toEqual(1)
  // })
})
