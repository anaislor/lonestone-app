import React from "react";
import "./../styles/components/ScoreTable.scss";

function ScoreTable({ scores }) {
  return (
    <table className="view-score-table">
      <tbody className="view-score-table-head">
        <tr>
          <td colSpan={3} className="view-score-table-head-player">Joueur</td>
          <td colSpan={3} className="view-score-table-head-computed">Ordinateur</td>
        </tr>
        <tr>
          <td>Score total</td>
          <td>Score de la partie</td>
          <td>Action</td>
          <td>Action</td>
          <td>Score de la partie</td>
          <td>Score total</td>
        </tr>
      </tbody>
      <tbody className="view-score-table-body">
        {scores.map((score, index) => (
          <tr key={score.id} className="view-score-item">
            <td className="view-score-item-total-score">
              {index === scores.length - 1 &&
                scores.reduce((acc, curr) => (acc += curr.playerScore), 0)}
            </td>
            <td
              className={`${
                score.playerScore && !score.computerScore ? "win" : ""
              } ${!score.playerScore && score.computerScore ? "fail" : ""}`}
            >
              {score.playerScore
                ? "gagné"
                : !score.computerScore
                ? "match nul"
                : "perdu"}
            </td>
            <td className="view-score-item-player">{score.playerAction}</td>
            <td className="view-score-item-computer">{score.computerAction}</td>
            <td
              className={`${
                score.computerScore && !score.playerScore ? "win" : ""
              } ${!score.computerScore && score.playerScore ? "fail" : ""}`}
            >
              {score.computerScore
                ? "gagné"
                : !score.playerScore
                ? "match nul"
                : "perdu"}
            </td>
            <td className="view-score-item-total-score">
              {index === scores.length - 1 &&
                scores.reduce((acc, curr) => (acc += curr.computerScore), 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScoreTable;
