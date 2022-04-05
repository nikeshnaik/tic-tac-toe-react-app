class TicTacToe {


    constructor() {
        this.state = {
            "player1": "X",
            "player2": "O",
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
        }
    }


    makeMove(row, col, player) {

        let [mark, nextPlayer] = player === "player1" ? ["X", "O"] : ["O", "X"]

        this.state.grid[row][col] = mark

        this.state.moves.push([row, col])

        let result = this.checkWinner(row, col)

        console.log("The result after the current move is -->", result)

        console.log(this.state)

        this.state.currentPlayer = nextPlayer

    }

    checkWinner(row, col) {

        // Algo from https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solution/

        let n = 3

        let currentPlayer_value = this.state[this.state.currentPlayer]

        console.log("curretnPlayerValue", currentPlayer_value, this.state.currentPlayer)


        this.state.rows[row] = this.state.rows[row] + currentPlayer_value
        this.state.cols[col] = this.state.cols[col] + currentPlayer_value


        if (row === col) {
            this.state.diagonal = this.state.diagonal + currentPlayer_value

        }

        if ((row + col) === (n - 1)) {
            this.state.antidiagonal = this.state.antidiagonal + currentPlayer_value
        }

        let currentMoveUpdatedScore = [this.state.rows[row], this.state.cols[col], this.state.antidiagonal, this.state.diagonal]

        for (let element in currentMoveUpdatedScore) {

            console.log(element, Math.abs(element), (Math.abs(element) === n))

            if (Math.abs(element) === n) {

                console.log("Returning -->", "Winner")

                return this.state.currentPlayer

            }

        };

        return this.state.moves.length === (n * n) ? "Draw" : "Pending"


    }
}


export default TicTacToe

let game = new TicTacToe()
game.makeMove(1, 0, "player1")
game.makeMove(2, 2, "player2")
game.makeMove(0, 1, "player1")
game.makeMove(2, 1, "player2")
game.makeMove(0, 2, "player1")
game.makeMove(2, 0, "player2")


// game.makeMove(1, 0, "player2")
// game.makeMove(1, 1, "player1")
// game.makeMove(1, 2, "player2")
// game.makeMove(2, 0, "player1")

