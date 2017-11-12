import React from 'react';

function userInput(props) {
    const style = {
        border: '2px solid green'
    };

    return (
        <input type="text" 
            style={style}
            onChange={props.changed}
            value={props.currentName}/>
    )
};

export default userInput;