import { useState } from "react";
export function Player({ symbol, name }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let userInput = <span className="player-name"> {playerName} </span>;
  if (isEditing) {
    userInput = <input type="text" required />;
  }

  function editBtnClicked() {
    setIsEditing(!isEditing);
    setPlayerName();
  }

  return (
    <li>
      <span className="player">
        {userInput}
        <span className="player-symbol"> {symbol} </span>
        <button onClick={() => editBtnClicked()}>
          {!isEditing ? "Edit" : "Save"}{" "}
        </button>
        ;
      </span>
    </li>
  );
}
