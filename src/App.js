import './App.css';
import NewGameLayout from './layouts/NewGameLayout';
import GameLayout from './layouts/GameLayout';
import ResultLayout from './layouts/ResultLayout';
import { useState } from 'react';
import TicTacToe from './TicTacToe/tictactoe';

function App() {



  return (
    <div className="App">

      {/* <NewGameLayout /> */}

      let game = new TicTacToe()



      <ResultLayout />
      <GameLayout />

    </div >
  );
}

export default App;
