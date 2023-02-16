import Form from "./components/form";
import Question from "./components/questionSection";
import RatingSection from './components/rating';
import { SubmitStyle } from './components/submit/submitStyle';

function App() {
  return (
    <Form>
        <Question></Question>
        <RatingSection></RatingSection>
        <SubmitStyle type="submit">Submit</SubmitStyle>
    </Form>
  );
}

export default App;
