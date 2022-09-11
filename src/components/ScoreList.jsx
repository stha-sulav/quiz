import React from "react";
import "../styles/ScoreList.css";

const ScoreList = ({ players }) => {
  return (
    <ul className="lists">
      {players.map((item, index) => {
        const { name, score } = item;
        return (
          <li className="player" key={index}>
            <h4 className="players-name">{name}</h4>
            <p className="player-score">{score}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ScoreList;
