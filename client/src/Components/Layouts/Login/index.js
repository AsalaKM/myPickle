import React, { Component } from "react"

import home from "../../../assets/images/home.svg"
import logo from "../../../assets/images/logo.jpg"

import {
  LoginPage,
  HomeIcon,
  Logo,
  Title,
  Input,
  Button,
  RegisterLink,
  Branding,
} from "./Login.style.js"

class Login extends Component {
  state = {
    email: "",
    password: "",
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  clickHome = () => {
    this.props.history.push("/")
  }

  clickResgister = () => {
    this.props.history.push("/register")
  }

  render() {
    return (
      <LoginPage>
        <HomeIcon src={home} onClick={this.clickHome} />

        <Branding>
          <Logo src={logo} />
          <Title>myPikle</Title>
        </Branding>

        <form>
          <Input
            type="email"
            placeholder="Your Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
        </form>

        <br />

        <Button>Login</Button>

        <RegisterLink onClick={this.clickResgister}>Create new acccount!</RegisterLink>
      </LoginPage>
    )
  }
}

export default Login
