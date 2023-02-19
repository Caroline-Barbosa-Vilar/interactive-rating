import styled from "styled-components";
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
  let InputValue = '';

  const ChosenOne = (event) => {
    InputValue = event.target.value;
  }
  console.log(InputValue)

  return (
    <RatingContainer>
      <input type="hidden" name="rate"/>
      <RatingButton onClick={ChosenOne} value={InputValue}>1</RatingButton>
      <RatingButton value={2}>2</RatingButton>
      <RatingButton value={3}>3</RatingButton>
      <RatingButton value={4}>4</RatingButton>
      <RatingButton value={5}>5</RatingButton>
    </RatingContainer>
  );
}

export default RatingSection;