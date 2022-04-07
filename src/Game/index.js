import { useState } from "react";
import GameLayout from "../layouts/GameLayout";
import initGameState from "./init_state";

function Game(player1, player2) {


    const [state, setState] = useState(initGameState("X", "O"));


    return (
        <GameLayout gameState={state} setState={setState} />
    )

}


export default Game;