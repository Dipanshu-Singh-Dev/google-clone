const TypeReducer = (state = "", action) => {
  if (action.payload) state = action.payload;
  return state;
};

export default TypeReducer;
