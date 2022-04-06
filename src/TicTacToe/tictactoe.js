class TicTacToe {


    constructor(player1, player2) {

        this.state = {
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
        }
    }

    getNextPlayer() {

        return this.state.currentPlayer === "X" ? "O" : "X"
    }


    makeMove(row, col) {

        console.log("currentplayer -->", this.state.currentPlayer)

        if (this.checkIfExistInArray(this.state.moves, [row, col])) {
            console.log("Already placed a tile")
            return null
        }

        this.state.grid[row][col] = this.state.currentPlayer

        this.state.moves.push([row, col])

        let result = this.checkWinner(row, col)

        this.state.currentPlayer = this.getNextPlayer()

    }

    checkIfExistInArray(array, elementtfind) {

        let foundElement = false;

        let _ = array.find((each) => {
            if (each[0] === elementtfind[0] && each[1] === elementtfind[1]) {

                foundElement = true
                return each

            }
        })

        return foundElement


    }

    checkWinner(row, col) {

        // Algo from https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solution/


        let n = 3

        let currentPlayer_value = this.state[this.state.currentPlayer]


        this.state.rows[row] = this.state.rows[row] + currentPlayer_value
        this.state.cols[col] = this.state.cols[col] + currentPlayer_value


        if (row === col) {
            this.state.diagonal = this.state.diagonal + currentPlayer_value

        }

        if ((row + col) === (n - 1)) {
            this.state.antidiagonal = this.state.antidiagonal + currentPlayer_value
        }

        let currentMoveUpdatedScore = [this.state.rows[row], this.state.cols[col], this.state.antidiagonal, this.state.diagonal]
        console.log(currentMoveUpdatedScore)

        for (let element in currentMoveUpdatedScore) {


            // console.log("check the logic --> ", currentMoveUpdatedScore[element], Math.abs(element) === n)

            if (Math.abs(currentMoveUpdatedScore[element]) === n) {

                let winner = this.state.currentPlayer === "X" ? "Player1" : "Player2"
                console.log("winner is  -->", winner)
                return this.state.currentPlayer

            }

        };

        console.log("draw or pending")
        return this.state.moves.length === (n * n) ? "Draw" : "Pending"

    }

    CPUPlayerMove(player) {


        let available_moves = []
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {

                if (!this.checkIfExistInArray(this.state.moves, [row, col])) {

                    available_moves.push([row, col])
                }
            }

        }

        let select_random_move = available_moves[Math.floor(Math.random() * available_moves.length)];

        this.makeMove(select_random_move[0], select_random_move[1])

    }

    capturePlayer2Moves(row, col) {

        this.state.moves.push([row, col])

        this.state.grid[row][col] = this.state.currentPlayer

        let _ = this.checkWinner(row, col)

        this.state.currentPlayer = this.getNextPlayer()

    }
}



export default TicTacToe

let game = new TicTacToe("O", "X")
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()
// game.CPUPlayerMove()

game.makeMove(0, 0)
game.capturePlayer2Moves(0, 2)
game.makeMove(1, 0)
game.capturePlayer2Moves(1, 2)
game.makeMove(2, 0)
console.log(game.state.grid)






