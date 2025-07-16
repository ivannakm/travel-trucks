import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  campers: [],
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCampers: (state, action) => {
      state.campers = action.payload;
    },
    // setCampers: (state, action) => {
    //   state.campers = Array.isArray(action.payload) ? action.payload : [];
    // },

    setError: (state, action) => {
      state.error = action.payload;
    },
    clearCampers: (state) => {
      state.campers = [];
      state.error = null;
    },
  },
});

export const { setLoading, setCampers, setError, clearCampers } =
  campersSlice.actions;

export default campersSlice.reducer;
