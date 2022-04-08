import styles from './style.module.css'
import Square from '../../components/Square'
import { useState } from 'react'
import { checkWinner, getNextPlayer } from '../../Game/TicTacToe_helpers'


function Board(props) {

    let dimensions = {
        "width": props.width,
        "height": props.height
    }


    function handleMouseClick(event) {

        let [row, col] = eval(event.currentTarget.dataset.loc)

        let oldGameState = props.gameState
        oldGameState.grid[row][col] = props.gameState.currentPlayer.toLowerCase()

        let [updatedState, results] = checkWinner(oldGameState, row, col)

        updatedState.moves.push(row, col)

        updatedState.currentPlayer = getNextPlayer(updatedState)

        props.setGameState({ ...updatedState })


    }



    return (

        <div className={styles.gridParent} style={dimensions}>
            <div className={styles.gridChild1} data-gridindex="0" data-loc="[0,0]" onClick={handleMouseClick} > <Square icon={props.gameState.grid[0][0]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild2} data-gridindex="1" data-loc="[0,1]" onClick={handleMouseClick}  > <Square icon={props.gameState.grid[0][1]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild3} data-gridindex="2" data-loc="[0,2]" onClick={handleMouseClick} > <Square icon={props.gameState.grid[0][2]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild4} data-gridindex="3" data-loc="[1,0]" onClick={handleMouseClick} ><Square icon={props.gameState.grid[1][0]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild5} data-gridindex="4" data-loc="[1,1]" onClick={handleMouseClick} > <Square icon={props.gameState.grid[1][1]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild6} data-gridindex="5" data-loc="[1,2]" onClick={handleMouseClick} ><Square icon={props.gameState.grid[1][2]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild7} data-gridindex="6" data-loc="[2,0]" onClick={handleMouseClick} > <Square icon={props.gameState.grid[2][0]} player={props.gameState.currentPlayer} /> </div>
            <div className={styles.gridChild8} data-gridindex="7" data-loc="[2,1]" onClick={handleMouseClick} ><Square icon={props.gameState.grid[2][1]} player={props.gameState.currentPlayer} />  </div>
            <div className={styles.gridChild9} data-gridindex="8" data-loc="[2,2]" onClick={handleMouseClick} > <Square icon={props.gameState.grid[2][2]} player={props.gameState.currentPlayer} /> </div>
        </div >

    );
}
export default Board;