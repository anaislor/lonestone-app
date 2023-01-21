import React, { useRef } from "react";
import { useState } from "react";
import ScoreTable from "../components/ScoreTable";
import "./../styles/views/Game.scss";

function Game() {
  const actions = useRef(["pierre", "feuille", "ciseaux"]);
  const [scores, setScores] = useState([]);

  const handlePlayerAction = (action) => {
    const playerAction = action;
    const randomIndex =
      Math.round(Math.random() * 100) % actions.current.length;
    const computerAction = actions.current[randomIndex];

    actionComparison(playerAction, computerAction);
  };

  const actionComparison = (playerAction, computerAction) => {
    if (playerAction === computerAction) {
      setScores((previsousState) => [
        ...previsousState,
        {
          id: new Date().getTime(),
          computerAction,
          playerAction,
          computerScore: 0,
          playerScore: 0,
        },
      ]);
    } else if (
      (playerAction === "pierre" && computerAction === "ciseaux") ||
      (playerAction === "feuille" && computerAction === "pierre") ||
      (playerAction === "ciseaux" && computerAction === "feuille")
    ) {
      console.group("player win");
      setScores((previsousState) => [
        ...previsousState,
        {
          id: new Date().getTime(),
          computerAction,
          playerAction,
          computerScore: 0,
          playerScore: 1,
        },
      ]);
    } else {
      setScores((previsousState) => [
        ...previsousState,
        {
          id: new Date().getTime(),
          computerAction,
          playerAction,
          computerScore: 1,
          playerScore: 0,
        },
      ]);
    }
  };

  return (
    <div className="view">
      <div className="view-game-play">
        <h1>Chifoumi - A vous de jouer !</h1>
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
      <ScoreTable scores={scores} />
    </div>
  );
}

export default Game;
