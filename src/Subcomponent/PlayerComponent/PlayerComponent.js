import React from 'react';
import './PlayerComponent.scss'; // Ensure you have this SCSS file created

const PlayerComponent = ({ name, imageUrl }) => {
  return (
    <div className="player-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
    </div>
  );
};

export default PlayerComponent;
