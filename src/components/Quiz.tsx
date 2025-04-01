import {useState} from 'react';
import {QUIZ} from '@data/QuestionSet';
import ScoreCard from '@components/ScoreCard';

interface Answer {
  text: string;
  score: number;
}
interface QuizProps {
  name: string;
}

const Quiz = ({name}: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const {questions} = QUIZ;
  if (!questions || questions.length === 0) {
    return <div>Error: No questions loaded.</div>;
  }

  const safeIndex = Math.min(currentQuestionIndex, questions.length - 1);
  const {image_url, question, answers} = questions[safeIndex];

  const onAnswerSelected = (answer: Answer) => {
    setSelectedAnswer(answer);
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;

    setQuizScore(prev => prev + selectedAnswer.score);
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswerChecked(false);
    }
  };

  const getAnswerClasses = (answer: Answer) => {
    const isSelected = selectedAnswer?.text === answer.text;

    let baseClasses = `
      p-3 my-2 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
      text-gray-800 bg-white border-gray-300 shadow-sm
      hover:bg-gray-100 hover:border-gray-400 hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-300`;

    let selectedClasses = `
      bg-red-600 border-red-700 text-black font-semibold shadow-lg
      ring-2 ring-offset-1 ring-red-400 `;

    return `${baseClasses} ${isSelected ? selectedClasses : ''}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-[85%] max-w-[600px] mx-auto">
        {!showResults ? (
          <div className="shadow-xl rounded-xl p-6 md:p-8 bg-white">
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              {question}
            </h4>
            {image_url && (
              <div className="w-full h-[180px] mb-4 rounded-lg overflow-hidden">
                <img src={image_url} alt="Question visual" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="text-right text-sm font-medium text-gray-500 mb-4">
              Question {currentQuestionIndex + 1} / {questions.length}
            </div>

            <ul className="list-none p-0 mb-6">
              {answers.map(answer => (
                <li
                  key={answer.text}
                  onClick={() => onAnswerSelected(answer)}
                  className={getAnswerClasses(answer)}
                  tabIndex={0}
                  onKeyPress={e => e.key === 'Enter' && onAnswerSelected(answer)}
                >
                  {answer.text}
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <button
                onClick={handleNextQuestion}
                className={`
                  w-full md:w-auto px-8 py-3 rounded-lg text-white font-semibold
                  transition-all duration-200 ease-in-out
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400
                  ${
                    answerChecked
                      ? 'bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg hover:cursor-pointer active:scale-[0.98]'
                      : 'bg-gray-400 cursor-not-allowed opacity-70'
                  }
                `}
                disabled={!answerChecked}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Show My Result' : 'Next Question'}
              </button>
            </div>
            <img
              src="tedxntua-black-logo.png"
              alt="tedxntua-logo-black"
              className="w-[180px] h-auto mx-auto mt-8"
            />
          </div>
        ) : (
          <ScoreCard name={name} score={quizScore} />
        )}
      </div>
    </div>
  );
};
export default Quiz;
