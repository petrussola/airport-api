import React, { useEffect } from "react";

//REDUX
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function ListFlights({ count, increment, fetchFlights }) {
  useEffect(() => {
    fetchFlights();
  });
  return (
    <div className="listFlights">
      <h1>Arrivals/Departures</h1>
      <p>the count is {count}</p>
      <button onClick={increment}>Increment</button>
      <ul>
        <li>Fligh 1</li>
        <li>Fligh 2</li>
        <li>Fligh 3</li>
        <li>Fligh 4</li>
        <li>Fligh 5</li>
      </ul>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(ListFlights);
