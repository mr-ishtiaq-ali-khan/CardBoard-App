import React from 'react';

function Card({ char, bgColor }) {

    return (
        <div style={ { 'backgroundColor': bgColor} }>
            <span> { char } </span>
        </div>
    )
}

export default Card;