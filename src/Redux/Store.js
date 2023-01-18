import SearchReducer from "./SearchReducer";
import TypeReducer from "./TypeReducer";
import { configureStore } from "@reduxjs/toolkit";
const reducer = {
  search: SearchReducer,
  type: TypeReducer,
};
const preloadedState = { search: [], type: "text" };
const store = configureStore({
  reducer,
  preloadedState,
});
export default store;
