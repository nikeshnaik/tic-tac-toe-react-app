// Supposed to be CPU Algo, but it always ties.


function nextCPUMove(player) {

    // Didn't find any deep copy solution for JS as Python has it
    let grid = JSON.parse(JSON.stringify(this.state.grid))

    let [mark, nextPlayer] = player === "player1" ? ["X", "O"] : ["O", "X"]

    let bestScore = -Infinity;
    let moves = []
    let best_move;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (grid[i][j] === -1) {
                grid[i][j] = mark
                moves.push([i, j])
                let moves, score = this.minimax(grid, 0, moves, false);

                grid[i][j] = -1;

                if (score > bestScore) {
                    bestScore = score;
                    best_move = (i, j)
                }
            }
        }
    }


    return best_move

}


function minimax(grid, depth, moves, isMaximizing) {

    if (isMaximizing) {

        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (grid[i][j] === -1) {
                    grid[i][j] = this.state[this.state.currentPlayer] === "X" ? "O" : "X"
                    moves.push([i, j])
                    let score = this.minimax(grid, depth + 1, false);
                    bestScore = Math.max(score, bestScore)
                }
            }
        }

        return moves, bestScore
    }
    else {
        let bestScore = - Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (grid[i][j] === -1) {

                    grid[i][j] = this.state[this.state.currentPlayer] === "X" ? "X" : "O"

                    let score = this.minimax(grid, depth + 1, true);

                    grid[i][j] = -1;

                    bestScore = Math.min(score, bestScore)
                }

            }
        }

        return moves, bestScore;
    }

}
