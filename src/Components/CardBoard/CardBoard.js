import React from 'react';

function CardBoard (props) {

    return (
        <div className="cardBoard">
            { props.children }
        </div>
    )
}

export default CardBoard;