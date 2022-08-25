import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  gameData: [],
  question: "",
  answers: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.gameData = payload;
      console.log(payload);
      console.log(state.gameData);
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { getData } = gameSlice.actions;
export const getAllQuiz = (state) => state.quiz.gameData;
