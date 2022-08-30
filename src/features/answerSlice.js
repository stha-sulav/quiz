import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
  correctAnswer: "",
  selectedAnswer: "",
};

const shuffel = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
};

const answerSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    getAnswers: (state, { payload }) => {
      let tempArr = [...payload.incorrect_answers, payload.correct_answer];
      state.answers = shuffel(tempArr);
      state.correctAnswer = payload.correct_answer;
    },
    setSelectedAnswer: (state, { payload }) => {
      console.log(payload);
      state.selectedAnswer = payload;
    },
  },
});

export const answerReducer = answerSlice.reducer;

export const { getAnswers, setSelectedAnswer } = answerSlice.actions;

export const getShuffeldAnswers = (state) => state.answers.answers;
export const getCorrectAnswer = (state) => state.answers.correctAnswer;
export const getSelectedAnswer = (state) => state.answers.selectedAnswer;
