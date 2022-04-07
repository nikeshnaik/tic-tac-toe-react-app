
function getNextPlayer(state) {
    return state.currentPlayer === "X" ? "O" : "X";

}

function checkIfExistInArray(array, elementtfind) {

    let foundElement = false;

    let _ = array.find((each) => {
        if (each[0] === elementtfind[0] && each[1] === elementtfind[1]) {

            foundElement = true
            return each

        }
    })
    return foundElement
}

function checkWinner(state, row, col) {

    // Algo from https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solution/


    console.log("state in checkwinner", state)

    let n = 3

    let currentPlayer_value = state[state.currentPlayer]


    state.rows[row] = state.rows[row] + currentPlayer_value
    state.cols[col] = state.cols[col] + currentPlayer_value


    if (row === col) {
        state.diagonal = state.diagonal + currentPlayer_value

    }

    if ((row + col) === (n - 1)) {
        state.antidiagonal = state.antidiagonal + currentPlayer_value
    }

    let currentMoveUpdatedScore = [state.rows[row], state.cols[col], state.antidiagonal, state.diagonal]
    console.log(currentMoveUpdatedScore)

    for (let element in currentMoveUpdatedScore) {


        // console.log("check the logic --> ", currentMoveUpdatedScore[element], Math.abs(element) === n)

        if (Math.abs(currentMoveUpdatedScore[element]) === n) {

            let winner = state.currentPlayer === "X" ? "Player1" : "Player2"
            console.log("winner is  -->", winner)
            state.winner = state.currentPlayer
            return [state, state.currentPlayer]

        }

    };

    console.log("draw or pending")
    return [state, state.moves.length === (n * n) ? "Draw" : "Pending"]

}



function CPUPlayerMove(state, player) {


    let available_moves = []
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {

            if (!checkIfExistInArray(state.moves, [row, col])) {

                available_moves.push([row, col])
            }
        }

    }

    let select_random_move = available_moves[Math.floor(Math.random() * available_moves.length)];


    return state, (select_random_move[0], select_random_move[1])

}


function capturePlayer2Moves(state, row, col) {

    state.moves.push([row, col])

    state.grid[row][col] = state.currentPlayer

    let _ = checkWinner(row, col)

    state.currentPlayer = getNextPlayer()

    return state

}


export { capturePlayer2Moves, checkWinner, getNextPlayer, checkIfExistInArray }