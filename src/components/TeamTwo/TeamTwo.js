import React from "react";
import Button from "../../Subcomponent/Button/Button";
import PlayerComponent from "../../Subcomponent/PlayerComponent/PlayerComponent";
import "./TeamTwo.scss"; // Make sure to import the CSS file

const TeamTwo = () => {
  const handleButtonClick = () => {
    console.log("clicked");
    alert('Under Implementation')
  };

  return (
    <div className="team-two">
      <div className="text-container">
      {[...Array(6)].map((_, index) => (
    <PlayerComponent
      key={index}
      name={`${Math.floor(Math.random() * 100) + 1} points`} // Generate a random number between 1 and 100
      imageUrl="https://cdn.vectorstock.com/i/preview-1x/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"
    />
  ))}   
      </div>
      <div className="button-container">
        <Button backgroundColor="#32CD32" onClick={handleButtonClick}>
          Place Bid
        </Button>
      </div>
    </div>
  );
};

export default TeamTwo;
