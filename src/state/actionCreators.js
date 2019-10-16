import * as types from "./actionTypes";
import axios from "axios";

const airportApi = "https://api.schiphol.nl/public-flights/flights";

// COUNT STATE
export function increment() {
  return {
    type: types.INCREMENT
  };
}

// LIST FLIGHTS STATE

export const fetchFlights = () => dispatch => {
  axios
    .get(airportApi)
    .then(res => {
        debugger
    })
    .catch(error => {
        debugger
    });
};
