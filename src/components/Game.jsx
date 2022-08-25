import React from "react";
import data from "../data";
import "../styles/Game.css";

const Game = ({ score, round, selectedAnswer, setSelectedAnswer }) => {
  const { question, correct_answer, incorrect_answers } = data[score];

  const answerArr = [...incorrect_answers, correct_answer];

  const randomAnswer = answerArr.sort(() => Math.random() - 0.5);

  return (
    <section className="question-answer">
      <h1 className="question">{question}</h1>
      <div className="options">
        {randomAnswer.map((item, index) => (
          <button className="option-btn" key={index}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Game;
