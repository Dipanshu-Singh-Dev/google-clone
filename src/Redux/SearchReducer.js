export default function reducer(state = [], action) {
  if (action.payload !== "" || state !== action.payload)
    state = [action.payload];
  return state;
}
