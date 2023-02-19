import styled from "styled-components";
import { useState } from "react";
import { titleColor, textColor, circleBgColor } from '../UI/variables';

const RatingContainer = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 2.2rem 0;
`
const RatingButton = styled.button`
  background-color: ${circleBgColor};
  border-radius: 50%;
  color: ${textColor};
  font-size: 1.6rem;
  height: 4.2rem;
  transition: all .3s ease;
  width: 4.2rem;
  &:hover {
    background-color: ${textColor};
    color: ${titleColor};
    cursor: pointer;
  }
  &:active {
    background-color: ${textColor};
    color: ${titleColor};
    cursor: pointer;
  }
`

function RatingSection() {
  const [selectedValue, setSelectedValue] = useState(null);
  console.log(selectedValue)

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <RatingContainer>
      <input type="hidden" name="rate"/>
      <RatingButton  type="button" onClick={() => handleButtonClick(1)} value={1}>1</RatingButton>
      <RatingButton  type="button" onClick={() => handleButtonClick(2)} value={2}>2</RatingButton>
      <RatingButton  type="button" onClick={() => handleButtonClick(3)} value={3}>3</RatingButton>
      <RatingButton  type="button" onClick={() => handleButtonClick(4)} value={4}>4</RatingButton>
      <RatingButton  type="button" onClick={() => handleButtonClick(5)} value={5}>5</RatingButton>
      <p key={selectedValue}></p>
    </RatingContainer>
  );
}

export default RatingSection;