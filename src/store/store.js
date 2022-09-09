import { configureStore } from "@reduxjs/toolkit";
import { answerReducer } from "../features/answerSlice";
import { gameReducer } from "../features/gameSlice";
import { modalReducer } from "../features/modalSlice";
import { msgReducer } from "../features/msgSlice";
import { playerReducer } from "../features/playerSlice";
import { questionReducer } from "../features/questionSlice";

export const store = configureStore({
  reducer: {
    quiz: gameReducer,
    question: questionReducer,
    answers: answerReducer,
    msg: msgReducer,
    modal: modalReducer,
    player: playerReducer,
  },
});
