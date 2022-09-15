import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import ScoreList from "../components/ScoreList";
import { setMsg } from "../features/msgSlice";
import { getAllPlayers, setPlayerName } from "../features/playerSlice";
import "../styles/Score.css";

const Score = () => {
  const dispatch = useDispatch();
  const allPLayers = useSelector(getAllPlayers);

  const handleNewGame = () => {
    dispatch(setPlayerName({ name: "" }));
    hideMsg();
  };

  const hideMsg = () => {
    dispatch(setMsg({ showMsg: false }));
  };

  return (
    <section className="score-section">
      <div className="content">
        {allPLayers.length < 1 ? (
          <h3 className="score-title">no players to show.</h3>
        ) : (
          <>
            <h3 className="score-title">HighScores</h3>
            <ScoreList players={allPLayers} />
          </>
        )}
        <div className="btn-container">
          <Link to={"/"} onClick={handleNewGame}>
            <Buttons name={"new game"} />
          </Link>

          <Link to={"/"} onClick={hideMsg}>
            <Buttons name={"Go back to home"} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Score;
