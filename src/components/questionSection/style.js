import styled from "styled-components";
import { titleColor, textColor, circleBgColor } from '../UI/variables';

export const IconContainer = styled.div `
align-items: center;
background-color: ${circleBgColor};
border-radius: 50%;
position: relative;
height: 4rem;
left: 22px;
margin-top: 2rem; 
top: 23px;
width: 4rem;
`
export const QuestionTitle = styled.h1 `
color: ${titleColor};
font-size: 2.4rem;
padding: 4.2rem 0 0 2rem;
`
export const QuestionText = styled.p `
color: ${textColor};
font-size: 1.4rem;
line-height: 2.3rem;
padding: 1.3rem 2rem 0 2rem;
`
export const StarStyle = styled.img `
position: relative;
top: 12px;
left: 11px;
`
