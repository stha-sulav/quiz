import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShuffeldAnswers, setSelectedAnswer } from "../features/answerSlice";
import { getQuestions } from "../features/questionSlice";
import { decode } from "html-entities";

import "../styles/Game.css";

const Game = ({ selectAnswer }) => {
  const dispatch = useDispatch();
  const question = useSelector(getQuestions);
  const answers = useSelector(getShuffeldAnswers);

  const handleClick = (e) => {
    const { textContent } = e.target;
    dispatch(setSelectedAnswer(textContent));
    console.log(textContent);
  };

  return (
    <section className="question-answer">
      <h1 className="question">{decode(question)}</h1>
      <div className="options">
        {answers.map((item, index) => (
          <button
            className="option-btn"
            key={index}
            onDoubleClick={selectAnswer}
            onClick={handleClick}
          >
            {decode(item)}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Game;
