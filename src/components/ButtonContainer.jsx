import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCorrectAnswer,
  getSelectedAnswer,
  setSelectedAnswer,
} from "../features/answerSlice";
import { getRound, Inc, setChecked } from "../features/gameSlice";
import { setMoadlText, setModal } from "../features/modalSlice";
import { setMsg } from "../features/msgSlice";
import "../styles/ButtonContainer.css";
import Buttons from "./Buttons";

const ButtonContainer = () => {
  const dispatch = useDispatch();
  const round = useSelector(getRound);
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
    }
  };

  const handleNext = () => {
    if (round > 9) {
      dispatch(setModal());
      dispatch(
        setMoadlText({
          text: `Do you want to play again?`,
        })
      );
    } else {
      dispatch(Inc({ round: 1, score: 0 }));
      dispatch(setMsg({ showMsg: "false" }));
    }
    dispatch(setSelectedAnswer(""));
  };

  const handleRestart = () => {
    dispatch(setSelectedAnswer(""));
    dispatch(setModal());
    dispatch(
      setMoadlText({ text: "Are you sure you want to restart the game?" })
    );
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
