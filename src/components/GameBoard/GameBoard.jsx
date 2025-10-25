import { useState } from "react";

const startingBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export function GameBoard({ onSquareSelect, activePLayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(startingBoard);

  function addSymbol(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      let updateGameBoard = [...prevBoard.map((inner) => [...inner])];
      updateGameBoard[rowIndex][colIndex] = activePLayerSymbol;
      return updateGameBoard;
    });

    onSquareSelect();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => addSymbol(rowIndex, colIndex)}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
