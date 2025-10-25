import { useState } from "react";

import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { Logs } from "./components/Logs/Logs";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePLayer, setActivePLayer] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePLayer((currentPLayer) => {
      return currentPLayer === "X" ? "0" : "X";
    });

    setGameTurns((preTurns) => {
      const newTurn = [...preTurns];
      newTurn.push(
        activePLayer +
          " Clicked square " +
          (rowIndex + 1) +
          "," +
          (colIndex + 1)
      );
      return newTurn;
    });

    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innie) => [...innie])];
      updatedBoard[rowIndex][colIndex] = activePLayer;
      return updatedBoard;
    });
  }

  return (
    <main>
      <div id="game-container">
        <section>
          <ol id="players" className="highlight-player">
            <Player
              name="player 1"
              symbol="X"
              isActive={activePLayer === "X"}
            />
            <Player
              name="player 2"
              symbol="0"
              isActive={activePLayer === "0"}
            />
          </ol>
        </section>
        <section>
          <GameBoard
            onSquareSelect={handleSelectSquare}
            activePLayerSymbol={activePLayer}
            gameBoard={gameBoard}
          />
        </section>
      </div>
      <Logs gameTurns={gameTurns}></Logs>
    </main>
  );
}

export default App;
