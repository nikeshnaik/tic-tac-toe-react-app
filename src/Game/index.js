import { useState } from "react";
import GameLayout from "../layouts/GameLayout";
import ResultLayout from "../layouts/ResultLayout";
import initGameState from "./init_state";
import NewGameLayout from "../layouts/NewGameLayout"

function Game(player1, player2) {


    // the first person to select the X or O wil be player 1 and player 2 will next,
    // so player 1 and player 2 designation will set for entire games until someone quits
    //  or restarts whole multiple games setup.

    // SO player 1 will be always X and player 2 will be always CPU or Next person.


    let [state, setState] = useState(initGameState("X", "O"));

    let [globalState, setGlobalState] = useState({
        games_played: 0,
        player1_score: 0,
        player2_score: 0,
        player1: "you",
        player2: "CPU",
        player1_mark: "X",
        player2_mark: "O",
        ties: 0,
        gameHistory: [],
        new_game: true
    })

    let winner_details = {
        winner: state.winner,
        winner_name: state.winner === "X" ? globalState.player1 : globalState.player2,

    }
    console.log("render", globalState.new_game)

    return (

        <>
            <NewGameLayout render={globalState.new_game} globalState={globalState} setGlobalState={setGlobalState} />
            <ResultLayout gameState={state} setState={setState} globalState={globalState} setGlobalState={setGlobalState} render={state.winner === "X" || state.winner === "O" ? true : false} winnerDetails={winner_details} />
            < GameLayout render={!globalState.new_game} gameState={state} setState={setState} globalState={globalState} setGlobalState={setGlobalState} />
        </>

    )

}


export default Game;