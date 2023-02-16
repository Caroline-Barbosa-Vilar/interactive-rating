import styled from "styled-components";
import { titleColor, textColor, circleBgColor } from '../UI/variables';

export const RatingButton = styled.button`
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