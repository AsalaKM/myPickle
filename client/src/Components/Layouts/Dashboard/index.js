import React, { Component } from "react"
import { Button, Container, Logout, Headline, Text } from "./Dashboard.style"
import axios from "axios"
import jwt_decode from "jwt-decode"

class Dashboard extends Component {
  state = {
    name: "",
    loaded: false,
    login: false,
    approved: null,
  }

  componentDidMount() {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken)
      const name = decoded.name
      const firstName = name.split(" ")[0]
      axios.get(`${process.env.REACT_APP_HOST || ""}/check-approval`).then(result => {
        this.setState({
          name: `, ${firstName}`,
          loaded: true,
          approved: result.data,
          login: true,
        })
      })
    } else {
      this.setState({
        loaded: true,
      })
    }
  }

  editProfile = () => {
    this.props.history.push("/edit-profile")
  }
  browseProfiles = () => {
    this.props.history.push("/profiles")
  }
  browsePosts = () => {
    this.props.history.push("/blog")
  }
  createPlog = () => {
    this.props.history.push("/postarticles")
  }

  logout = () => {
    localStorage.removeItem("jwtToken")
    window.location.href = "/"
  }

  render() {
    const { loaded, name, approved, login } = this.state
    const { logout } = this

    if (!loaded) {
      return <h1>Loading your details...</h1>
    }

    return (
      <Container>
        {!approved && (
          <div>
            <Headline>Profile status: awaiting approval</Headline>
            <Text>
              Your profile has not been approved yet and will not be shown. You can still edit your
              profile and create blog posts. Please check again later.
            </Text>
          </div>
        )}
        <h2>Welcome back{name}</h2>

        <Button onClick={this.editProfile}> Edit Profile </Button>
        <br />
        <Button onClick={this.createPlog}> Create Blog Post </Button>
        <br />
        <Button onClick={this.browseProfiles}> Browse Profiles</Button>
        <br />
        <Button onClick={this.browsePosts}>Browse Blog Posts</Button>
        <br />
        {login ? <Logout onClick={logout}>Logout</Logout> : null}
      </Container>
    )
  }
}

export default Dashboard
