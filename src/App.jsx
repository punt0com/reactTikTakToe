import { useState } from "react";
import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";
import { Logs } from "./components/Logs/Logs";
import { winningCombinations } from "./winningConditions";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let winner;

function deriveActivePlayer(gameTurns) {
  return gameTurns[gameTurns.length - 1]?.player === "X" ? "0" : "X";
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [gameBoard, setGameBoard] = useState(initialBoard);

  for (const c of winningCombinations) {
    const firstSquareSymbol = gameBoard[c[0].row][c[0].column];
    const secondSquareSymbol = gameBoard[c[1].row][c[1].column];
    const thirdSquareSymbol = gameBoard[c[2].row][c[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = firstSquareSymbol;
  }

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const lastPlayer = deriveActivePlayer(prevTurns);

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
          {winner && <p>you won, {winner}</p>}
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
