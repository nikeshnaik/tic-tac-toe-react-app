
function initGameState(player1, player2) {



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