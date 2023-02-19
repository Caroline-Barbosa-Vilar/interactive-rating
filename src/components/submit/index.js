import styled from "styled-components";
import { titleColor, btnBgColor } from '../UI/variables';

export const SubmitStyle = styled.button `
  background-color: ${btnBgColor};
  border-radius: 3rem;
  color: ${titleColor};
  font-size: 1.4rem;
  font-weight: 600;
  height: 4.5rem;
  letter-spacing: .2rem;
  margin: 2rem 2rem;
  text-transform: uppercase;
  transition: all .3s ease;  
  width: 28rem;
  &:hover,
  &:active {
    background-color: ${titleColor};
    color: ${btnBgColor};
    cursor: pointer;
  }
`
function Submit(props) {
  const { onSubmit } = props;
  // const SendTo = (event) => {
  //   event.preventDefault();
  // }
  return (
    <SubmitStyle onClick={onSubmit}>Submit</SubmitStyle>
  )
}

export default Submit;