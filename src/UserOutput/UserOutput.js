import React from 'react';
import './UserOutput.css';

function userOutput(props) {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>I hope I'll be</p>
        </div>
    );
};

export default userOutput;