import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "../services/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (params) => {
    const data = await getCampers(params);
    return data;
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id) => {
    const data = await getCamperById(id);
    return data;
  }
);

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectedCamper: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      });
  },
});

export const { clearSelectedCamper } = campersSlice.actions;
export default campersSlice.reducer;
