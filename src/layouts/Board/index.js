import styles from './style.module.css'
import Square from '../../components/Square'
import { useState } from 'react'
import { checkWinner, getNextPlayer } from '../../Game/TicTacToe_helpers'


function Board(props) {

    const [localState, setLocalState] = useState(new Array(8))

    let dimensions = {
        "width": props.width,
        "height": props.height
    }


    function handleMouseClick(event) {

        let newLocalState = localState
        newLocalState[parseInt(event.currentTarget.dataset.gridindex)] = props.gameState.currentPlayer.toLowerCase()

        setLocalState([...newLocalState])

        let [row, col] = eval(event.currentTarget.dataset.loc)

        let [updatedState, results] = checkWinner(props.gameState, row, col)

        updatedState["grid"][row][col] = props.gameState.currentPlayer

        updatedState.moves.push(row, col)

        updatedState.currentPlayer = getNextPlayer(updatedState)

        props.setGameState({ ...updatedState })


    }

    return (

        <div className={styles.gridParent} style={dimensions}>
            <div className={styles.gridChild1} data-gridindex="0" data-loc="[0,0]" onClick={handleMouseClick} > <Square icon={localState[0]} /> </div>
            <div className={styles.gridChild2} data-gridindex="1" data-loc="[0,1]" onClick={handleMouseClick}  > <Square icon={localState[1]} /> </div>
            <div className={styles.gridChild3} data-gridindex="2" data-loc="[0,2]" onClick={handleMouseClick} > <Square icon={localState[2]} /> </div>
            <div className={styles.gridChild4} data-gridindex="3" data-loc="[1,0]" onClick={handleMouseClick} ><Square icon={localState[3]} />  </div>
            <div className={styles.gridChild5} data-gridindex="4" data-loc="[1,1]" onClick={handleMouseClick} > <Square icon={localState[4]} /> </div>
            <div className={styles.gridChild6} data-gridindex="5" data-loc="[1,2]" onClick={handleMouseClick} ><Square icon={localState[5]} />  </div>
            <div className={styles.gridChild7} data-gridindex="6" data-loc="[2,0]" onClick={handleMouseClick} > <Square icon={localState[6]} /> </div>
            <div className={styles.gridChild8} data-gridindex="7" data-loc="[2,1]" onClick={handleMouseClick} ><Square icon={localState[7]} />  </div>
            <div className={styles.gridChild9} data-gridindex="8" data-loc="[2,2]" onClick={handleMouseClick} > <Square icon={localState[8]} /> </div>
        </div >

    );
}
export default Board;