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
    userName: "",
  }
  async componentDidMount() {
    const { isAuthenticated, user } = this.props
    if (isAuthenticated) {
      const response = await axios.get(`${process.env.REACT_APP_HOST || ""}/users/${user}`)
      this.setState({ userName: response.data })
    } else {
      this.setState({ userName: "Guest" })
    }
  }
  toggleMenu = () => {
    this.setState({ isActive: !this.state.isActive })
  }
  toggleDropdown = () => {
    const { dropDownActive } = this.state

    this.setState({ dropDownActive: !dropDownActive })
  }
  handleMouseDown = e => {
    this.toggleMenu()
    e.stopPropagation()
  }
  logout = () => {
    localStorage.removeItem("jwtToken")
    window.location.href = "/"
  }
  render() {
    const theme = {
      child: "display:flex;flex: 0 1 50px;align-items: center; justify-content: space-between;",
      width: "100%",
      background: "var(--lightwhite)",
    }
    const Empty = { width: "10%" }
    const { isActive, userName, dropDownActive } = this.state
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
            <LogoBox to="/">
              MYPICKLE
              <Logo />
            </LogoBox>
            <BlockBox theme={Empty} />
          </BlockBox>
          <NavMenu
            toggle={isActive}
            handleMouseDown={this.handleMouseDown}
            userAuthData={userAuthData}
            userName={userName}
            dropDownActive={dropDownActive}
            toggleDropdown={this.toggleDropdown}
            logout={this.logout}
          />
        </Container>
      </ColoredWrapper>
    )
  }
}
export default Navbar
