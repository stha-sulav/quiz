import React from "react";
import { useSelector } from "react-redux";
import { getRound, getScore } from "../features/gameSlice";
import "../styles/Header.css";

const Header = () => {
  const round = useSelector(getRound);
  const score = useSelector(getScore);

  return (
    <section className="header">
      <h1 className="round">
        Question Number : {round === 0 ? round + 1 : round}/10
      </h1>
      <h3 className="score">
        Score : <span>{score}</span>
      </h3>
    </section>
  );
};

export default Header;
