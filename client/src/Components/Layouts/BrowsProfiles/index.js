import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import CardElements from './Card';
import { Button } from './BrowsProfiles.style';


class BrowsProfiles extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
        axios
          .get('/api/v1/profilesList')
          .then((res) => {
            const info = res.data;
            this.setState({ results: info });
          })
          .catch((error) => {
            console.log('error:', error);
          });
      }


  render() {
    const { results } = this.state;
    if (results.length !== 0) {
    return (
        <div>
          <Button>FILTER</Button>
        <div>
          {
           results.map(item => (
             <CardElements
               id={item.id}
               key={item.id}
               profilePicture={item.profilePicture}
               description={item.description}
               location={item.location}
               wellnessArea={item.wellnessArea}
             />
           ))
         }

        </div>
        </div>

    );
  }
}

}
export default  BrowsProfiles;
