import React from 'react';
import './style.css'

const CharacterChooseBox = (props) => {
    const removeButtonClicked = (event) => {
        event.preventDefault()
        props.removeHandler(props.id)
    }
    return (
        <div class="characterBox">
            <p>Character name: {props.name}</p>
            <p>Level: {props.level}</p>
            <button onClick={removeButtonClicked}>Удалить</button>
        </div>
    );
};

export default CharacterChooseBox;