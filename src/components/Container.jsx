import React from "react";
import ListFlights from "./ListFlights";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  div {
      width: 50%;
  }
`;

export default function Container() {
  return (
    <StyledDiv>
      <ListFlights className='list' />
      <ListFlights className='listFlights' />
    </StyledDiv>
  );
}
