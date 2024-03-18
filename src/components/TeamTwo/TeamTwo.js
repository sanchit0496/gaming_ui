import React from 'react';
import Button from '../../Subcomponent/Button/Button';
import './TeamTwo.scss'; // Make sure to import the CSS file

const TeamOne = () => {
    const handleButtonClick = () => {
        console.log('clicked');
    }

    return (
        <div className="team-two">
            <div className="text-container">Team Two</div>
            <div className="button-container">
                <Button backgroundColor="#32CD32" onClick={handleButtonClick}>Click Me</Button>
            </div>
        </div>
    );
};

export default TeamOne;
