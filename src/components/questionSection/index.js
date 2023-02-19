import styled from "styled-components";
import { titleColor, textColor, circleBgColor } from '../UI/variables';
import starIcon from '../../img/icon-star.svg';

const IconContainer = styled.div `
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
const StarStyle = styled.img `
position: relative;
top: 12px;
left: 11px;
`
const QuestionTitle = styled.h1 `
color: ${titleColor};
font-size: 2.4rem;
padding: 4.2rem 0 0 2rem;
`
const QuestionText = styled.p `
color: ${textColor};
font-size: 1.4rem;
line-height: 2.3rem;
padding: 1.3rem 2rem 0 2rem;
`

function Question() {
  return (
    <section>
      <IconContainer>
        <StarStyle src={starIcon} alt="star icon"/>
      </IconContainer>
      <QuestionTitle>How did we do?</QuestionTitle>
      <QuestionText>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </QuestionText>
    </section>
  )
}

export default Question;