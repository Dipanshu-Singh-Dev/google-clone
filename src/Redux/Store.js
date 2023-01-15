import SearchReducer from "./SearchReducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: SearchReducer,
});
export default store;
