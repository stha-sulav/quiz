import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    text: "",
  },
  reducers: {
    setModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setMoadlText: (state, { payload }) => {
      state.text = payload.text;
    },
  },
});

export const { setModal, setMoadlText } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

export const getIsModalOpen = (state) => state.modal.isModalOpen;
export const getText = (state) => state.modal.text;
