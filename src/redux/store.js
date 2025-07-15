// import { configureStore } from "@reduxjs/toolkit";
// import campersReducer from "./campersSlice";

// export const store = configureStore({
//   reducer: {
//     campers: campersReducer,
//     filters: filtersReducer,
//     favorites: favoritesReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./slice";

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    campers: campersReducer, // Use the campers reducer here
  },
});

export default store;
