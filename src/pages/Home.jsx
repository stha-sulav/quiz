import React, { useEffect, useState } from "react";
import Game from "../components/Game";
import "../styles/Home.css";
import gameApi from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  getDifficulty,
  getRound,
  Restart,
  setChecked,
  setDifficulty,
} from "../features/gameSlice";
import { getAnswers } from "../features/answerSlice";
import { getQuestion } from "../features/questionSlice";
import Header from "../components/Header";
import ButtonContainer from "../components/ButtonContainer";
import Message from "../components/Message";
import { isMsgShown } from "../features/msgSlice";
import Loading from "../components/Loading";
import Player from "./Player";
import { getPlayerName } from "../features/playerSlice";

const Home = () => {
  const [token, setToken] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const round = useSelector(getRound);

  const difficulty = useSelector(getDifficulty);

  const msgShown = useSelector(isMsgShown);

  const playerName = useSelector(getPlayerName);

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
    dispatch(setChecked(false));
  }, [round]);

  const fetchQnA = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      {msgShown && <Message />}
      {!playerName ? (
        <Player />
      ) : (
        <>
          <Header />
          <Game />
          <ButtonContainer />
        </>
      )}
    </main>
  );
};

export default Home;
