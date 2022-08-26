import { configureStore } from "@reduxjs/toolkit";
import { answerReducer } from "../features/answerSlice";
import { gameReducer } from "../features/gameSlice";
import { questionReducer } from "../features/questionSlice";

export const store = configureStore({
  reducer: {
    quiz: gameReducer,
    question: questionReducer,
    answers: answerReducer,
  },
});
