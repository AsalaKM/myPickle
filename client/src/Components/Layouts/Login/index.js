import React, { Component } from "react"
import axios from "axios"

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

import { ErrorMsg } from "../../Common/Questions/Questions.style"

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
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

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    const user = { email: email, password: password }

    axios
      .post("/login-user", user)
      .then(res => console.log("result", res))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    const { errors } = this.state
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
          {errors.email && <ErrorMsg className="invalid-feedback">{errors.email}</ErrorMsg>}
          <br />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && <ErrorMsg className="invalid-feedback">{errors.password}</ErrorMsg>}
          <br />
        </form>

        <br />

        <Button onClick={this.handleSubmit}>Login</Button>

        <RegisterLink onClick={this.clickResgister}>Create new acccount!</RegisterLink>
      </LoginPage>
    )
  }
}

export default Login
