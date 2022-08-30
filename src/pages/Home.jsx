import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  getDifficulty,
  getRound,
  Restart,
  setDifficulty,
} from "../features/gameSlice";
import {
  getAnswers,
  getCorrectAnswer,
  getSelectedAnswer,
} from "../features/answerSlice";
import { getQuestion } from "../features/questionSlice";
import Header from "../components/Header";
import ButtonContainer from "../components/ButtonContainer";

const Home = () => {
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const round = useSelector(getRound);
  const difficulty = useSelector(getDifficulty);
  const userAnswer = useSelector(getSelectedAnswer);
  const correctAnswer = useSelector(getCorrectAnswer);

  useEffect(() => {
    const configureToken = async () => {
      const response = await gameApi.get(`/api_token.php?command=request`);
      if (response.data.response_code === 1) {
        await gameApi.get(`/api_token.php?command=reset&token=${token}`);
        console.log("hello");
      }
      setToken(response.data.token);
    };

    configureToken();

    dispatch(Restart());
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

  return (
    <main>
      <Header />
      <Game />
      <ButtonContainer />
    </main>
  );
};

export default Home;
