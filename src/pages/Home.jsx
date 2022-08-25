import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswers,
  getData,
  getDifficulty,
  getQuestion,
  getQuestions,
  getRound,
  getScore,
} from "../features/gameSlice";

const Home = () => {
  const dispatch = useDispatch();

  const round = useSelector(getRound);
  const score = useSelector(getScore);
  const difficulty = useSelector(getDifficulty);

  useState(() => {
    const resetToken = async () => {
      await gameApi.get(
        `https://opentdb.com/api_token.php?command=reset&token=942a23c3f76e3177a4de18f3902754f67e6ff58699212b0e31697fa218c70362`
      );
    };
    resetToken();
  }, []);

  useEffect(() => {
    fetchQnA();
  }, [round]);

  const fetchQnA = async () => {
    const response = await gameApi
      .get(
        `/api.php?amount=1&difficulty=${difficulty}&type=multiple&token=942a23c3f76e3177a4de18f3902754f67e6ff58699212b0e31697fa218c70362`
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
    // dispatch(getData(response.data.results));
  };

  return (
    <main>
      <section className="header">
        <h1 className="round">Question Number : {round}</h1>
        <h4 className="score">
          Score : <span>{score}</span>
        </h4>
      </section>
      <Game />
      {/* <button className="btn">start</button> */}
    </main>
  );
};

export default Home;
