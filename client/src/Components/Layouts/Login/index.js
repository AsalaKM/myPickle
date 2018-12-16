import React, { Component } from 'react'

class Login extends Component {
  state = {
    email : '',
    password : ''
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
     });
  }


  render() {
    return (
      <form>
        <input
        type='email'
        placeholder='Your Email'
        name='email'
        value={this.state.email}
        onChange={this.onChange}
        />
        <br/>
        <input
        type='password'
        placeholder='Password'
        name='password'
        value={this.state.password}
        onChange={this.onChange}
         />
        <br/>
        <button>Login</button>
      </form>
    )
  }
}

export default Login;