import React, { Component } from 'react';
import { Button, Container, Logout } from './Dashboard.style';



class Dashboard extends Component {

  editProfile = () => {
    this.props.history.push("/")
  }
  browseProfiles = () => {
    this.props.history.push("/")
  }
  browsePosts = () => {
    this.props.history.push("/")
  }
  createPlog = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <Container>
        <h2>Welcome back, Haneen</h2>

        <Button onClick={ this.editProfile }> Edit Profile </Button>
        <br />
        <Button onClick={ this.createPlog }> Create Blog Post </Button>
        <br />
        <Button onClick={this.browseProfiles}> Browse Profiles</Button>
        <br />
        <Button onClick= { this.browsePosts}>Browse Blog Posts</Button>
        <br />

        <Logout>Logout</Logout>
      </Container>
    );
  }
}

export default Dashboard;
