import React, { Component } from 'react'

class Login extends Component {
  state = {
    email : '',
    password : ''
  }

  render() {
    return (
      <form>
        <input
        type='email'
        placeholder='Your Email'
        name='email'
        value={this.state.email}
        />
        <br/>
        <input
        type='password'
        placeholder='Password'
        name='password'
        value={this.state.password}
         />
        <br/>
        <button>Login</button>
      </form>
    )
  }
}

export default Login;