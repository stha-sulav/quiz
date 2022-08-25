import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuiz, getData } from "../features/gameSlice";

const Home = () => {
  const dispatch = useDispatch();
  const quizData = useSelector(getAllQuiz);

  const [gameData, setGameData] = useState(data);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const { correct_answer } = data[score];

  useEffect(() => {
    fetchQnA();
  }, []);

  useState(() => {
    const resetToken = async () => {
      await gameApi.get(
        `https://opentdb.com/api_token.php?command=reset&token=942a23c3f76e3177a4de18f3902754f67e6ff58699212b0e31697fa218c70362`
      );
    };
    resetToken();
  });

  const fetchQnA = async () => {
    const response = await gameApi
      .get(
        `/api.php?amount=10&difficulty=${difficulty}&type=multiple&token=942a23c3f76e3177a4de18f3902754f67e6ff58699212b0e31697fa218c70362`
      )
      .catch((err) => console.log("Err: ", err));

    dispatch(getData(response.data.results));
  };

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
