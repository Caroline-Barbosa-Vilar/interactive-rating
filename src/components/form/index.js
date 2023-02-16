import styled from 'styled-components';

const FormContainer = styled.form `
  width: 32.5rem;
  height: 36rem;
  background-color: #19202C;
  border-radius: 1.5rem;
`
function Form(props) {
  return (
    <FormContainer>
      {props.children}
    </FormContainer>
  )
}

export default Form;