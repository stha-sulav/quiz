import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/ScoreList.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerName, removeScore } from "../features/playerSlice";

const ScoreList = ({ players }) => {
  const playerName = useSelector(getPlayerName);
  const dispatch = useDispatch();

  const handleRemove = (name) => {
    if (playerName === name) {
      dispatch(removeScore({ name: name }));
    }
  };

  return (
    <ul className="lists">
      {players.map((item, index) => {
        const { name, score } = item;
        return (
          <li className="player" key={index}>
            <h4 className="players-name">{name}</h4>
            <p className="player-score">{score}</p>
            <button
              className={`rm-btn ${playerName === name ? "show" : "hide"}`}
              onClick={() => handleRemove(name)}
            >
              <DeleteIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ScoreList;
