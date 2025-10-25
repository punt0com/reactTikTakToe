import { useState } from "react";
export function Player({ symbol, name, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let userInput = <span className="player-name"> {playerName} </span>;
  if (isEditing) {
    userInput = (
      <input
        type="text"
        required
        value={playerName}
        onChange={onUserNameChange}
      />
    );
  }

  function editBtnClicked() {
    setIsEditing((editing) => !editing);
  }
  
  //esto es un evento normal de Js
  function onUserNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {userInput}
        <span className="player-symbol"> {symbol} </span>
        <button onClick={() => editBtnClicked()}>
          {!isEditing ? "Edit" : "Save"}
        </button>
        ;
      </span>
    </li>
  );
}
