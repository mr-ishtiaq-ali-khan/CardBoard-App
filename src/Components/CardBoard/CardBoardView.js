import React, { useState } from 'react';
import randomColor from 'randomcolor';
import Card from './Card';
import CardBoard from './CardBoard';
import Input from '../GlobalComponents/Input';
import Button from '../GlobalComponents/Button';

function CardBoardView(props) {
    const [inputVal, setInputVal] = useState('');
    const [allCards, setAllCards] = useState([]);

    function AddCards () {
        const arrOfStrings = inputVal.trim().replace(/\s+/g, "").split('');
        let colorCondition = allCards.length;
        
        const cardComponents = arrOfStrings.map( (character, iteration) => {
            colorCondition++;
            const uniqueKey = character + iteration + ( + new Date() );
            const addColor = colorCondition % 3 == 0 ? randomColor() : '';
            return  <Card char={ character } key={ uniqueKey } bgColor={ addColor }/>
        } );

        setAllCards([ ...allCards , ...cardComponents]);
    }

    return (
        <CardBoard>
            <div>
                <Input className="inputText" value={ inputVal } events={ {  onChange:  event => setInputVal( event.target.value ) } } />
                <Button btnText="Add" className="btn" events={ { onClick:  AddCards }} />
            </div>
            <div className="cards">
                { allCards }
            </div>
        </CardBoard>
    )
}

export default CardBoardView;