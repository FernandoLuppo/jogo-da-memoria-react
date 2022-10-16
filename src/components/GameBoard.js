import React from "react";
import CardElement from "./CardElement";

function GameBoard(props) {
    return(
        <div id="gameBoard">
            {props.cards.map((card, index) => <CardElement key={index} card={card} handleFlip={props.handleFlip}></CardElement>)}
        </div>
    )
}

export default GameBoard