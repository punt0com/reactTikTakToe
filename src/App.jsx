import { useState } from "react";

import { Player } from "./components/Player/Player";
import { GameBoard } from "./components/GameBoard/GameBoard";

function App() {
  const [activePLayer, setActivePLayer] = useState("X");

  function handleSelectSquare() {
    setActivePLayer((currentPLayer) => {
      return currentPLayer === "X" ? "0" : "X";
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
          <GameBoard onSquareSelect={handleSelectSquare} activePLayerSymbol={activePLayer} />
        </section>
      </div>
      <section>LOGS</section>
    </main>
  );
}

export default App;
