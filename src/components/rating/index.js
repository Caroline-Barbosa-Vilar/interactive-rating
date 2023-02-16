import React from 'react';
import styled from "styled-components";
import { RatingButton } from './buttonStyle';

const RatingContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 2.2rem 0;
`

function RatingSection() {
  return (
    <RatingContainer>
      <input type="hidden" name="rate" value="3" />
      <RatingButton value={1}/>
      <RatingButton value={2}/>
      <RatingButton value={3}/>
      <RatingButton value={4}/>
      <RatingButton value={5}/>
    </RatingContainer>
  );
}

export default RatingSection;