import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCorrectAnswer,
  getSelectedAnswer,
  setSelectedAnswer,
} from "../features/answerSlice";
import { Inc, Restart, setChecked } from "../features/gameSlice";
import { setMsg } from "../features/msgSlice";
import "../styles/ButtonContainer.css";
import Buttons from "./Buttons";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const userAnswer = useSelector(getSelectedAnswer);
  const correctAnswer = useSelector(getCorrectAnswer);

  const handleCheck = () => {
    if (userAnswer && userAnswer === correctAnswer) {
      dispatch(Inc({ round: 0, score: 1 }));
      dispatch(setMsg({ msg: "Correct", showMsg: true, msgType: "success" }));
    } else {
      dispatch(Inc({ round: 0, score: 0 }));
      dispatch(setMsg({ msg: "Incorrect", showMsg: true, msgType: "error" }));
    }

    if (!userAnswer) {
      dispatch(
        setMsg({
          msg: "No answer selected to check",
          showMsg: true,
          msgType: "error",
        })
      );
    } else {
      dispatch(setChecked(true));
      dispatch(setSelectedAnswer(""));
    }
  };

  const handleNext = () => {
    dispatch(Inc({ round: 1, score: 0 }));
  };

  const handleRestart = () => {
    dispatch(Restart());
  };

  const handleSkip = () => {
    dispatch(Inc({ round: 1, score: 0 }));
  };

  return (
    <div className="btn-container">
      <Buttons name={"restart"} clickFunc={handleRestart} />
      <Buttons name={"check"} clickFunc={handleCheck} />
      <Buttons name={"next"} clickFunc={handleNext} />
      <Buttons name={"skip"} clickFunc={handleSkip} />
    </div>
  );
};

export default ButtonContainer;
