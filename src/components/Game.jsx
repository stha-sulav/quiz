import React from "react";
import { useSelector } from "react-redux";
import data from "../data";
import {
  getCorrectAnswer,
  getQuestions,
  getShuffeldAnswers,
} from "../features/gameSlice";
import "../styles/Game.css";

const Game = () => {
  const question = useSelector(getQuestions);
  const answers = useSelector(getShuffeldAnswers);
  const correctAnswer = useSelector(getCorrectAnswer);

  return (
    <section className="question-answer">
      <h1 className="question">{question}</h1>
      <div className="options">
        {answers.map((item, index) => (
          <button className="option-btn" key={index}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Game;
