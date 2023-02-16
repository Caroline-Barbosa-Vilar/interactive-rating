import React from 'react';
import { IconContainer, QuestionTitle, QuestionText, StarStyle } from './style'
import starIcon from '../../img/icon-star.svg';


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