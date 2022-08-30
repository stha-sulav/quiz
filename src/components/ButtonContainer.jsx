import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCorrectAnswer, getSelectedAnswer } from "../features/answerSlice";
import { Inc, Restart } from "../features/gameSlice";
import "../styles/ButtonContainer.css";
import Buttons from "./Buttons";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const userAnswer = useSelector(getSelectedAnswer);
  const correctAnswer = useSelector(getCorrectAnswer);

  const handleSelect = (rounds = 0, scores = 0) => {
    if (userAnswer === correctAnswer) {
      dispatch(Inc({ round: rounds, score: scores }));
    } else {
      dispatch(Inc({ round: rounds, score: scores }));
    }
    console.log(userAnswer);
  };

  const handleRestart = () => {
    dispatch(Restart());
  };

  const handleSkip = () => {
    console.log("skip");
  };

  return (
    <div className="btn-container">
      <Buttons name={"restart"} clickFunc={handleRestart} />
      <Buttons name={"check"} clickFunc={() => handleSelect(0, 1)} />
      <Buttons name={"next"} clickFunc={() => handleSelect(1, 0)} />
      <Buttons name={"skip"} clickFunc={handleSkip} />
    </div>
  );
};

export default ButtonContainer;
