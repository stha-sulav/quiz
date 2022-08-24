import React from "react";
import data from "../data";

const Game = ({ score }) => {
  const { question, correct_answer, incorrect_answers } = data[score];

  const answers = { ...incorrect_answers, 4: correct_answer };

  const answersLength = Object.keys(answers).length;

  let randomAnswers = {};

  const random = Math.ceil(Math.random() * answersLength - 1);
  const buttons = Object.values(answers).map((item, index) => {
    if (!randomAnswers.hasOwnProperty(random)) {
      randomAnswers = { ...randomAnswers, item };
    }
  });

  console.log(buttons);

  return (
    <section>
      <h1 className="question">{question}</h1>
      <div className="options">{buttons}</div>
    </section>
  );
};

export default Game;
