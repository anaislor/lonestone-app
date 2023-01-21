import React, { useRef } from "react";
import "./../styles/views/Game.scss";

function Game() {
  const actions = useRef(["pierre", "feuille", "ciseaux"]);

  const handlePlayerAction = (action) => {
    const playerAction = action;
    const randomIndex =  Math.round(Math.random() * 100) % actions.current.length;
    const computerAction = actions.current[randomIndex];
  };

  return (
    <div className="view">
      <div className="view-game-play">
        {actions.current.map((action) => (
          <button
            key={action}
            className="view-game-play-button"
            onClick={() => handlePlayerAction(action)}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Game;
