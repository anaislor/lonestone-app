import React, { useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";
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
    console.log("click");
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
      <table className="view-score-table">
        <thead className="view-score-table-head">
          <tr>
            <td>Score Joueur total</td>
            <td>Score Joueur partie</td>
            <td>Jeu du jouer</td>
            <td>Jeu de l'ordinateur</td>
            <td>Score Ordinateur partie</td>
            <td>Score Ordinateur total</td>
          </tr>
        </thead>
        <tbody className="view-score-table-body">
          {scores.map((score, index) => (
            <tr key={score.id} className="view-score-item">
              <td>
                {index === scores.length - 1 &&
                  scores.reduce((acc, curr) => (acc += curr.playerScore), 0)}
              </td>
              <td>
                {score.playerScore
                  ? "gagné"
                  : !score.computerScore
                  ? "match nul"
                  : "perdu"}
              </td>
              <td className="view-score-item-player">{score.playerAction}</td>
              <td className="view-score-item-computer">
                {score.computerAction}
              </td>
              <td>
                {score.computerScore
                  ? "gagné"
                  : !score.playerScore
                  ? "match nul"
                  : "perdu"}
              </td>
              <td>
                {index === scores.length - 1 &&
                  scores.reduce((acc, curr) => (acc += curr.computerScore), 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Game;
