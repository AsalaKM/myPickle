import React, { Component } from "react"
import axios from "axios"
import { BurgerButton, Logo, LogoBox, ColoredWrapper } from "./StyledElm"
import { BlockBox } from "../../Generic-helpers/BlockBox"
import { Container } from "../../Generic-helpers/layoutpack"
import { NavMenu } from "./NavMenu"

class Navbar extends Component {
  state = {
    isActive: false,
    dropDownActive: false,
    user: "",
  }
  async componentDidMount() {
    try {
      // axios.post("")
    } catch (err) {}
  }
  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive })
  }
  handleMouseDown = e => {
    this.toggleMenu()

    console.log("clicked")
    e.stopPropagation()
  }
  render() {
    const theme = {
      child: "display:flex;flex: 0 1 50px;align-items: center; justify-content: space-between;",
      width: "100%",
    }
    const Empty = { width: "10%" }
    const { isActive } = this.state
    const { isAuthenticated, user } = this.props
    const userAuthData = {
      isAuthenticated,
      user,
    }
    return (
      <ColoredWrapper className={isActive ? "active" : ""} shadow="0px 0px 3px #000000">
        <Container>
          <BlockBox theme={theme}>
            {isActive ? (
              <BlockBox theme={Empty} />
            ) : (
              <BurgerButton toggleMenu={this.handleMouseDown} />
            )}
            <LogoBox>
              MYPICKLE
              <Logo />
            </LogoBox>
            <BlockBox theme={Empty} />
          </BlockBox>
          <NavMenu
            toggle={isActive}
            handleMouseDown={this.handleMouseDown}
            userAuthData={userAuthData}
          />
        </Container>
      </ColoredWrapper>
    )
  }
}
export default Navbar
