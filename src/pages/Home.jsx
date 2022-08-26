import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  getDifficulty,
  getRound,
  getScore,
  Restart,
  setDifficulty,
} from "../features/gameSlice";
import { getAnswers } from "../features/answerSlice";
import { getQuestion } from "../features/questionSlice";
import { Inc } from "../features/gameSlice";

const Home = () => {
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const round = useSelector(getRound);
  const score = useSelector(getScore);
  const difficulty = useSelector(getDifficulty);

  useState(() => {
    const configureToken = async () => {
      const response = await gameApi.get(`/api_token.php?command=request`);
      if (response.data.response_code === 1) {
        await gameApi.get(`/api_token.php?command=reset&token=${token}`);
        console.log("hello");
      }
      setToken(response.data.token);
    };

    configureToken();
  }, []);

  useEffect(() => {
    fetchQnA();
    dispatch(setDifficulty());
  }, [round]);

  const fetchQnA = async () => {
    const response = await gameApi
      .get(
        `/api.php?amount=1&difficulty=${difficulty}&type=multiple&token=${token}`
      )
      .catch((err) => console.log("Err: ", err));

    const data = response.data.results[0];
    dispatch(getQuestion(data.question));
    dispatch(
      getAnswers({
        incorrect_answers: data.incorrect_answers,
        correct_answer: data.correct_answer,
      })
    );
  };

  const handleSelectClick = () => {
    dispatch(Inc({ round: 1, score: 0 }));
  };

  const handleResetClick = () => {
    dispatch(Restart());
  };

  return (
    <main>
      <section className="header">
        <h1 className="round">Question Number : {round}/10</h1>
        <h3 className="score">
          Score : <span>{score}</span>
        </h3>
      </section>
      <Game />
      <div className="btn-container">
        <button className="btn" onClick={handleResetClick}>
          restart
        </button>
        <button
          className="btn"
          onClick={handleSelectClick}
          disabled={round > 9}
        >
          select
        </button>
      </div>
    </main>
  );
};

export default Home;
