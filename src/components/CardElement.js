import React from "react";

function CardElement(props) {
    return (
        <div className={`card ${props.card.flipped ? "flip": ""}`} id={props.card.id} onClick={()=>{
            props.handleFlip(props.card) 
            console.log("ola")
            }}>
            <div className="card-front">
                <img className="icon" src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}></img>
            </div>
            <div className="card-back">
                {"</>"}
            </div>
        </div>
    )
}

export default CardElement