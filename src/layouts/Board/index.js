import styles from './style.module.css'
import Square from '../../components/Square'
import { useState } from 'react'
import { checkWinner, getNextPlayer } from '../../Game/TicTacToe_helpers'
import ResultLayout from '../ResultLayout'


function Board(props) {


    let dimensions = {
        "width": props.width,
        "height": props.height
    }


    function handleMouseClick(event) {


        let oldGlobalState = props.globalState

        let [row, col] = eval(event.currentTarget.dataset.loc)

        let oldGameState = props.gameState

        oldGameState.grid[row][col] = props.gameState.currentPlayer.toLowerCase()

        oldGameState.moves.push([row, col])

        let [updatedState, results] = checkWinner(oldGameState, row, col)

        console.log("update state results -->", [updatedState, results])

        if ((updatedState.winner === "X" || updatedState.winner === "O")) {

            console.log("I am inside second round of winner ")
            console.log(oldGlobalState)

            if (updatedState.winner === "X") {

                oldGlobalState["player1_score"] = oldGlobalState["player1_score"] + 1

            } else if (updatedState.winner === "O") {

                oldGlobalState["player2_score"] = oldGlobalState["player2_score"] + 1

            }

            oldGlobalState.games_played = + 1
            props.setGameState({ ...updatedState })

            oldGlobalState.gameHistory.push(props.gameState)
            props.setGlobalState({ ...oldGlobalState })


        } else if (results === "Draw") {


            oldGlobalState.gameHistory.push(props.gameState)
            oldGlobalState.games_played = + 1
            oldGlobalState["ties"] = + 1

            props.setGameState({ ...updatedState })
            props.setGlobalState({ ...oldGlobalState })

        }


        updatedState.currentPlayer = getNextPlayer(updatedState)

        props.setGameState({ ...updatedState })

    }


    return (

        <div className={styles.gridParent} style={dimensions}>
            <div className={styles.gridChild1} data-gridindex="0" data-loc="[0,0]" onClick={props.gameState.grid[0][0] === -1 ? handleMouseClick : null} > <Square icon={props.gameState.grid[0][0]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild2} data-gridindex="1" data-loc="[0,1]" onClick={props.gameState.grid[0][1] === -1 ? handleMouseClick : null}  > <Square icon={props.gameState.grid[0][1]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild3} data-gridindex="2" data-loc="[0,2]" onClick={props.gameState.grid[0][2] === -1 ? handleMouseClick : null} > <Square icon={props.gameState.grid[0][2]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild4} data-gridindex="3" data-loc="[1,0]" onClick={props.gameState.grid[1][0] === -1 ? handleMouseClick : null} ><Square icon={props.gameState.grid[1][0]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild5} data-gridindex="4" data-loc="[1,1]" onClick={props.gameState.grid[1][1] === -1 ? handleMouseClick : null} > <Square icon={props.gameState.grid[1][1]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild6} data-gridindex="5" data-loc="[1,2]" onClick={props.gameState.grid[1][2] === -1 ? handleMouseClick : null} ><Square icon={props.gameState.grid[1][2]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild7} data-gridindex="6" data-loc="[2,0]" onClick={props.gameState.grid[2][0] === -1 ? handleMouseClick : null} > <Square icon={props.gameState.grid[2][0]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild8} data-gridindex="7" data-loc="[2,1]" onClick={props.gameState.grid[2][1] === -1 ? handleMouseClick : null} ><Square icon={props.gameState.grid[2][1]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild9} data-gridindex="8" data-loc="[2,2]" onClick={props.gameState.grid[2][2] === -1 ? handleMouseClick : null} > <Square icon={props.gameState.grid[2][2]} player={props.gameState.currentPlayer} /> </div>
        </div >

    );
}
export default Board;