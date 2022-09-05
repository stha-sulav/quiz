import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCorrectAnswer,
  getSelectedAnswer,
  getShuffeldAnswers,
  setSelectedAnswer,
} from "../features/answerSlice";
import { getQuestions } from "../features/questionSlice";
import { decode } from "html-entities";

import "../styles/Game.css";
import { isChecked } from "../features/gameSlice";

const Game = () => {
  const dispatch = useDispatch();
  const question = useSelector(getQuestions);
  const answers = useSelector(getShuffeldAnswers);
  const checked = useSelector(isChecked);
  const correctAnswer = useSelector(getCorrectAnswer);
  const userAnswer = useSelector(getSelectedAnswer);

  const handleClick = (e) => {
    const { textContent } = e.target;
    dispatch(setSelectedAnswer(textContent));
  };

  const answerColor = (item) => {
    if (item === correctAnswer) {
      return "success";
    }

    if (item === userAnswer) {
      if (item !== correctAnswer) {
        console.log(userAnswer);
        return "error";
      }
    }
  };

  return (
    <section className="question-answer">
      <h1 className="question">{decode(question)}</h1>
      <div className="options">
        {answers.map((item, index) => (
          <button
            className={`option-btn ${checked && answerColor(item)}`}
            key={index}
            onClick={handleClick}
            disabled={checked}
          >
            {decode(item)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Game;
