import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  round: 0,
  difficulty: "easy",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    Inc: (state, { payload }) => {
      state.score += payload.score;
      state.round += payload.round;
      console.log(payload);
    },
    setDifficulty: (state) => {
      if (state.score > 4 && state.score < 7) {
        state.difficulty = "medium";
      } else if (state.score > 7) {
        state.difficulty = "hard";
      } else {
        state.difficulty = "easy";
      }
    },
    Restart: (state) => {
      state.round = 1;
      state.score = 0;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { Inc, setDifficulty, Restart } = gameSlice.actions;

export const getRound = (state) => state.quiz.round;
export const getScore = (state) => state.quiz.score;
export const getDifficulty = (state) => state.quiz.difficulty;
