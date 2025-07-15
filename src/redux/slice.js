import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  loading: false,
  campers: [],
  error: null,
};

// Create the slice
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
