import React, { useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";

const Home = () => {
  // const [data, setData] = useState(data);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  return (
    <main>
      <section className="header">
        <h1 className="round">Question Number : {round}</h1>
        <h4 className="score">
          Score : <span>{score}</span>
        </h4>
      </section>
      <Game score={score} />
      <button className="btn">start</button>
    </main>
  );
};

export default Home;
