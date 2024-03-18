import React from 'react';
import Button from '../../Subcomponent/Button/Button';
import './TeamOne.scss'; // Make sure to import the CSS file

const TeamOne = () => {
    const handleButtonClick = () => {
        console.log('clicked');
    }

    return (
        <div className="team-one">
            <div className="text-container">Team One</div>
            <div className="button-container">
                <Button backgroundColor="#FF1493" onClick={handleButtonClick}>Click Me</Button>
            </div>
        </div>
    );
};

export default TeamOne;
