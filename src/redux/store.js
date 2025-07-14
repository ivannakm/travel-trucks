import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: filtersReducer,      // if needed
    // favorites: favoritesReducer,  // if needed
  },
});
