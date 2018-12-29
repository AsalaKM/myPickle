import React, { Component } from 'react';
import work from '../../../assets/images/work.jpeg';

import { Button, Card, Avatar } from './BrowsProfiles.style';

class BrowsProfiles extends Component {
  render() {
    return (
      <div>

        <Button>FILTER</Button>

        <Card>
          <Avatar src={work} />
          <span>Description </span>
          <span>Location</span>
          <span> wellness area</span>
          <a href="#">
            <span>more details</span>
          </a>
        </Card>

      </div>

    );
  }
}

export default BrowsProfiles;
