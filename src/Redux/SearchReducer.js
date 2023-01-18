export default function reducer(state = [], action) {
  if (action.payload !== "" || state !== action.payload)
    state[0] = action.payload;
  return state;
}
