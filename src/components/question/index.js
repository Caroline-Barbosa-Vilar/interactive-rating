import styled from 'styled-components';
import React from 'react';
import starIcon from '../../img/icon-star.svg';

const IconContainer = styled.section `
  align-items: center;
  background-color: var(--circle-bg-color);
  border-radius: 50%;
  display: flex;
  height: 4.6rem;
  justify-content: center;
  margin: 3.3rem 0 0 3.35rem;
  width: 4.6rem;
`

const QuestionTitle = styled.h1 `
  color: var(--title-color);
  font-size: 2.8rem;
  padding: 3.3rem 0 0 3.2rem;
`
const QuestionText = styled.p `
  color: var(--text-color);
  font-size: 1.5rem;
  line-height: 2.3rem;
  padding: 1.3rem 2rem 0 3.2rem;
`

function Question() {
  return (
    <section>
      <IconContainer>
        <img src={starIcon} alt='an star'/>
      </IconContainer>
      <QuestionTitle>How did we do?</QuestionTitle>
      <QuestionText>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</QuestionText>
    </section>
  )
}

export default Question;