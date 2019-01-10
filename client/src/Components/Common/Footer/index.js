import React, { Component } from "react"

// load styled components
import { FooterWrapper, LinkLeft, LinkRight, Buttons } from "./Footer.style"

class Footer extends Component {
  state = {
    blog: false,
    profiles: false,
  }

  componentDidMount() {
    const pathName = window.location.pathname
    const section = pathName.split("/")[1]
    if (section === "blog") {
      this.setState({ blog: true, profiles: false })
    } else if (section === "profiles") {
      this.setState({ blog: false, profiles: true })
    } else {
      this.setState({ blog: false, profiles: false })
    }
  }

  render() {
    const { blog, profiles } = this.state
    return (
      <FooterWrapper>
        <Buttons>
          <LinkLeft to={"/blog"} selected={blog}>
            <img src={require("../../../assets/images/blog-icon.svg")} alt="blog" />
            Blog posts
          </LinkLeft>
          <LinkRight to={"/profiles"} selected={profiles}>
            Profiles
            <img src={require("../../../assets/images/user_Icon.svg")} alt="blog" />
          </LinkRight>
        </Buttons>
      </FooterWrapper>
    )
  }
}

export default Footer
