import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import data from "../data";

const Home = () => {
  const [gameData, setGameData] = useState(data);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const { correct_answer } = data[score];

  useEffect(() => {
    fetchQnA();
  }, []);

  const setState = (prevState) => {
    prevState + 1;
  };

  const selectAnswer = (e) => {
    const { textContext } = e.target;

    setSelectedAnswer(textContext);

    if (round > 4) {
      setDifficulty("mideium");
    } else if (round > 7) {
      setDifficulty("hard");
    } else {
      setDifficulty("easy");
    }

    if (selectedAnswer === correct_answer) {
      setRound(setState(prevState));
      setScore(setState(prevState));
    }
  };

  const fetchQnA = async () => {
    const response = await gameApi.get(
      `/api.php?amount=1&difficulty=${difficulty}&type=multiple&token=279398dc11bd23adfcacc9b75deba7acaa156e1a7b04174498d0d55e8aa63b36`
    );
    setGameData(response.data.results);
  };

  console.log(gameData);

  return (
    <main>
      <section className="header">
        <h1 className="round">Question Number : {round}</h1>
        <h4 className="score">
          Score : <span>{score}</span>
        </h4>
      </section>
      <Game
        score={score}
        round={round}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      {/* <button className="btn">start</button> */}
    </main>
  );
};

export default Home;
