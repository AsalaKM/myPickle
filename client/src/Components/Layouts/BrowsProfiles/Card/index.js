import React from 'react';
import { NavLink } from 'react-router-dom';


import { Card, Avatar } from './Card.styled';

const CardElements = (props) => {
  const {
    id, profilePicture, description, location, wellnessArea,
  } = props;
  return (

    <div>
      <Card>
        <Avatar src={this.profilePicture} alt="prfilePicture" />
        <span>
          {this.description}
          {' '}
        </span>
        <span>{this.location}</span>
        <span>
          {this.wellnessArea}
          {' '}
        </span>
        <NavLink to={`profileDetails/${id}`}>
          <span>more details</span>
        </NavLink>

      </Card>

    </div>

  );
};

export default CardElements;
