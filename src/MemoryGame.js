import React, { useEffect, useState } from "react";
import Game from "./game/game"
import GameOver from "./components/GameOver"
import GameBoard from "./components/GameBoard"

export default function MemoryGame() {
    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(()=>{
        setCards(Game.createCardsFromTechs())
    },[])

    function restart() {
        Game.clearCards()
        setCards(Game.createCardsFromTechs())
        setGameOver(false)
    }

    function handleFlip(card) {

        if (Game.setCard(card.id)) {
            if (Game.secondCard) {
              if (Game.checkMath()) {
                Game.clearCards();
                if(Game.checkGameOver()){
                    setGameOver(true)
                }
              } else {
                setTimeout(() => {
                    Game.unflipCards()
                    setCards([...Game.cards])
                }, 500);
              }
            }
        }
        setCards([...Game.cards])
    }

    return(
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} restart={restart}></GameOver>
        </div>
    )
}