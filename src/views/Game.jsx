import React from "react";
import { useState } from "react";
import ScoreTable from "../components/ScoreTable";
import "./../styles/views/Game.scss";

const actions = ["pierre", "feuille", "ciseaux"];

function Game() {
  const [scores, setScores] = useState([]);

  const handlePlayerAction = (playerAction) => {
    const randomIndex =
      Math.round(Math.random() * 100) % actions.length;
    const computerAction = actions[randomIndex];

    actionComparison(playerAction, computerAction);
  };

  const actionComparison = (playerAction, computerAction) => {
    const score = {
      id: new Date().getTime(),
      computerAction,
      playerAction,
    };

    if (playerAction === computerAction) {
      score.computerScore = 0;
      score.playerScore = 0;
    } else if (
      (playerAction === "pierre" && computerAction === "ciseaux") ||
      (playerAction === "feuille" && computerAction === "pierre") ||
      (playerAction === "ciseaux" && computerAction === "feuille")
    ) {
      score.computerScore = 0;
      score.playerScore = 1;
    } else {
      score.computerScore = 1;
      score.playerScore = 1;
    }
    setScores((previsousState) => [...previsousState, score]);
  };

  return (
    <div className="view">
      <div className="view-game-play">
        <h1>Chifoumi - A vous de jouer !</h1>
        {actions.map((action) => (
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
