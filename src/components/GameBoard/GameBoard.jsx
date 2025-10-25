import { useState } from "react";


export function GameBoard({ onSquareSelect,gameBoard }) {
//   const [gameBoard, setGameBoard] = useState(startingBoard);

//   function addSymbol(rowIndex, colIndex) {
//     setGameBoard((prevBoard) => {
//       let updateGameBoard = [...prevBoard.map((inner) => [...inner])];
//       updateGameBoard[rowIndex][colIndex] = activePLayerSymbol;
//       return updateGameBoard;
//     });

//     onSquareSelect();
//   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => onSquareSelect(rowIndex,colIndex)}>
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
