import { useState } from "react";
import { QUIZ } from "@data/QuestionSet";
import ScoreCard from "@components/ScoreCard";

interface QuizProps {
  name: string;
}

const Quiz = ({ name }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    text: "",
    score: 0,
  });
  // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const { questions } = QUIZ;
  const { question, answers } = questions[currentQuestionIndex];

  const onAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    setQuizScore((prev) => prev + selectedAnswer.score);
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer({ text: "", score: 0 });
      setAnswerChecked(false);
    }

    // console.log(
    //   `Answer after click ${selectedAnswer.text} with score ${selectedAnswer.score} added. Is last: ${isLastQuestion}`
    // );
  };

  return (
    <div className="container mt-5">
      <div>
        {!showResults ? (
          <div className="card p-4 w-[300px] mx-auto bg-blue-100">
            <h4>{question}</h4>
            <ul className="list-group bg-blue-500">
              {answers.map((answer) => (
                <li
                  key={answer.text}
                  onClick={() => onAnswerSelected(answer)}
                  className="list-group-item cursor-pointer "
                >
                  {answer.text}
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between mt-3">
              <b>
                Question
                {currentQuestionIndex + 1}/{questions.length}
              </b>
              <button
                onClick={handleNextQuestion}
                className="btn btn-primary"
                disabled={!answerChecked}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Submit"
                  : "Next Question"}
              </button>
            </div>
          </div>
        ) : (
          <ScoreCard name={name} score={quizScore} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
