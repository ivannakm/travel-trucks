import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  campers: [],
  camperInfo: null,
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
    setCamperInfo(state, action) {
      state.camperInfo = action.payload;
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

export const { setLoading, setCampers, setError, clearCampers, setCamperInfo } =
  campersSlice.actions;

export default campersSlice.reducer;
