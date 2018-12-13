import React, { Component } from "react"
import Menu from "react-burger-menu/lib/menus/bubble"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <Menu width="100%" noOverlay>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          Blog Posts
        </a>
        <a id="support" className="menu-item" href="/contact">
          Find Support
        </a>
        <a id="login" className="menu-item" href="/contact">
          Login
        </a>
      </Menu>
    )
  }
}

export default Navbar
