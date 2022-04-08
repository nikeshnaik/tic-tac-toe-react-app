
function initGameState(player1, player2) {


    // Player1 will be always X so it will be X(YOU) and Player2 will be O always.
    // Since X plays first --> Player 1 will be X. Init the game state with this logic.

    let game_init_state = {
        "player1": player1,
        "player2": player2,
        "X": 1,
        "O": -1,
        "currentPlayer": "X",
        "grid": [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]

        ],
        "winner": null,
        "rows": [0, 0, 0],
        "cols": [0, 0, 0],
        "diagonal": 0,
        "antidiagonal": 0,
        "moves": []
    };

    return game_init_state
}

export default initGameState;