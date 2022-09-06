import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAnswer,
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
      dispatch(checkAnswer(true));
    } else {
      dispatch(Inc({ round: 0, score: 0 }));
      dispatch(setMsg({ msg: "Incorrect", showMsg: true, msgType: "error" }));
      dispatch(checkAnswer(false));
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
    }
  };

  const handleNext = () => {
    dispatch(Inc({ round: 1, score: 0 }));
    dispatch(setSelectedAnswer(""));
    dispatch(setMsg({ showMsg: "false" }));
  };

  const handleRestart = () => {
    dispatch(Restart());
  };

  return (
    <div className="btn-container">
      <Buttons name={"restart"} clickFunc={handleRestart} />
      <Buttons name={"check"} clickFunc={handleCheck} />
      <Buttons name={"next"} clickFunc={handleNext} />
    </div>
  );
};

export default ButtonContainer;
