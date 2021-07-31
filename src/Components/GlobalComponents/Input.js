import React from 'react';

function Input(props) {
    const { type="text", value , events } = props;

    return (
        <input type={ type } value={ value } { ...events } />
    )
}

export default Input;