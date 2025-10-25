import { useState } from "react";
import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { Logs } from "./components/Logs/Logs";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  return gameTurns[gameTurns.length - 1]?.player === "X" ? "0" : "X";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialBoard);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const lastPlayer =
        prevTurns[prevTurns.length - 1]?.player === "X" ? "0" : "X";

      const newTurn = [...prevTurns];
      newTurn.push({
        player: lastPlayer,
        message:
          lastPlayer +
          " Clicked square " +
          (rowIndex + 1) +
          "," +
          (colIndex + 1),
      });
      return newTurn;
    });

    setGameBoard((prevBoard) => {
      const updatedBoard = [...prevBoard.map((innie) => [...innie])];
      updatedBoard[rowIndex][colIndex] = activePlayer;
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
              isActive={activePlayer === "X"}
            />
            <Player
              name="player 2"
              symbol="0"
              isActive={activePlayer === "0"}
            />
          </ol>
        </section>
        <section>
          <GameBoard
            onSquareSelect={handleSelectSquare}
            activePLayerSymbol={activePlayer}
            gameBoard={gameBoard}
          />
        </section>
      </div>
      <Logs gameTurns={gameTurns}></Logs>
    </main>
  );
}

export default App;
