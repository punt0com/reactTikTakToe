import { useState } from "react";

const startingBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export function GameBoard() {
  const [gameBoard, setGameBoard] = useState(startingBoard);

  function addSymbol(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      let updateGameBoard = { ...prevBoard };
      updateGameBoard[rowIndex][colIndex] = "X";
      return updateGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {startingBoard.map((row, rowIndex) => {
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
