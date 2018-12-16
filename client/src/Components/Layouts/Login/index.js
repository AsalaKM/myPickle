import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import home from '../../../assets/images/home.svg'
import logo from '../../../assets/images/logo.jpg'


import { LoginPage,Form,HomeIcon,Logo,Title,Input,Button } from './Login.style.js'

class Login extends Component {
  state = {
    email : '',
    password : ''
  }
  onChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
     });
  }

  clickHome = () => {
    this.props.history.push('/');
  };

  render() {

    return (
      <LoginPage>

        <HomeIcon  src={ home } onClick={ this.clickHome }></HomeIcon>

       <Logo src={ logo }></Logo>

      <Title >myPikle</Title >

      <Form>
        <Input
        type='email'
        placeholder='Your Email'
        name='email'
        value={this.state.email}
        onChange={this.onChange}
        >
        </Input>
        <br/>

        <Input
        type='password'
        placeholder='Password'
        name='password'
        value={this.state.password}
        onChange={this.onChange}
         >
         </Input>
        <br/>
      </Form>

      <Button>Login</Button>

      <Link to="/register">Create new acccount!</Link>

      </LoginPage>
    )
  }
}

export default Login;