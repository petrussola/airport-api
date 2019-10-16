import * as types from "./actionTypes";

const initialCount = 0;
export function countReducer(count = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    default:
      return count;
  }
}

const initialListFlights = {
    flights: [],
};
export function listFlights(listFlights = initialListFlights, action) {
  switch (action.type) {
    case types.ADD_FLIGHTS:
      return [...listFlights.payload];
    default:
      return listFlights;
  }
}
