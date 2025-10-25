import { Player } from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <section>
          <ol id="players">
            <Player name="player 1" symbol="X" />
            <Player name="player 2" symbol="0" />
          </ol>
        </section>
        <section>Game Board</section>
      </div>
      <section>LOGS</section>
    </main>
  );
}

export default App;
