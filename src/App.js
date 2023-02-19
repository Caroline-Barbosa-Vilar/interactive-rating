import styled from "styled-components";
import Form from "./components/form";
import Question from "./components/questionSection";
import RatingSection from './components/rating';
import Submit from './components/submit';

function App() {
  return (
    <Form>
        <Question></Question>
        <RatingSection></RatingSection>
        <Submit></Submit>
    </Form>
  );
}

export default App;
