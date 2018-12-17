import React, { Component } from 'react';
import { Button, Container, Logout } from './Dashboard.style';


class Dashboard extends Component {
  render() {
    return (
      <Container>
        <h2>Welcome back, Haneen</h2>

        <Button> Edit Profile </Button>
        <br />
        <Button> Create Blog Post </Button>
        <br />
        <Button> Browse Profiles</Button>
        <br />
        <Button>Browse Blog Posts</Button>
        <br />

        <Logout>Logout</Logout>
      </Container>
    );
  }
}

export default Dashboard;
