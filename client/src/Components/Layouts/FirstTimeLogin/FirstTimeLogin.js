import React, { Component } from "react"
import axios from "axios"

import setAuthToken from "../../../Utils/setAuthToken"

import logo from "../../../assets/images/logo.jpeg"

import { LoginPage, Logo, Title, Input, Button, RegisterLink, Branding } from "../Login/Login.style"

import { ErrorMsg } from "../../Common/Questions/Questions.style"
import swal from "sweetalert"

class FirstTimeLogin extends Component {
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
      .post(`${process.env.REACT_APP_HOST || ""}/login-user`, user)
      .then(async res => {
        // get the token from the response
        const { token } = res.data

        // set token to local storage (only stores strings)
        await localStorage.setItem("jwtToken", token)
        // set token to auth header
        await setAuthToken(token)
      })
      .then(() => {
        swal(
          "Welcome!",
          "Add more details to your profile to increase awareness even further",
          "success",
          {
            buttons: {
              skip: {
                text: "Skip",
                value: "skip",
                className: "bg-moon-gray",
              },
              edit: {
                text: "Add to Profile",
                value: "edit",
                className: "",
              },
            },
          }
        ).then(value => {
          switch (value) {
            case "skip": {
              window.location.href = "/dashboard"
              break
            }

            case "edit":
              window.location.href = "/edit-profile"
              break

            default:
              window.location.href = "/edit-profile"
          }
        })
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    const { errors } = this.state
    return (
      <LoginPage>
        <Branding>
          <Logo src={logo} />
          <Title>myPickle</Title>
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

export default FirstTimeLogin
