import React from 'react';
import { ReactDOM } from 'react-dom';

function Button (props) {
    const { btnText, className, events } = props;


    return (
        <button type="button" className={ className } { ...events } >
            { btnText }
        </button>
    )
}

export default Button;