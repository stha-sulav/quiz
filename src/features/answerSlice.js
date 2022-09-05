import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: [],
  correctAnswer: "",
  selectedAnswer: "",
  isCorrect: "",
  type: "",
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
      state.selectedAnswer = payload;
    },
    checkAnswer: (state, { payload }) => {
      state.isCorrect = payload;
      if (state.isCorrect) {
        state.type = "sucess";
      } else {
        state.type = "error";
      }
    },
  },
});

export const answerReducer = answerSlice.reducer;

export const { getAnswers, setSelectedAnswer, checkAnswer } =
  answerSlice.actions;

export const getShuffeldAnswers = (state) => state.answers.answers;
export const getCorrectAnswer = (state) => state.answers.correctAnswer;
export const getSelectedAnswer = (state) => state.answers.selectedAnswer;
export const getIsCorrect = (state) => state.answers.isCorrect;
export const getAnswersType = (state) => state.answers.type;
