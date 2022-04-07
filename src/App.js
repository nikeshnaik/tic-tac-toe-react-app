import './App.css';
import NewGameLayout from './layouts/NewGameLayout';
import Board from './layouts/GameLayout';
import ResultLayout from './layouts/ResultLayout';
import TicTacToe from './TicTacToe/tictactoe';
import Game from './Game';

function App() {



  return (
    <div className="App">

      {/* <NewGameLayout /> */}


      {/* <ResultLayout /> */}
      <Game />

    </div >
  );
}

export default App;
