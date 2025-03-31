'use client';
import {useState} from 'react';
import Quiz from '@components/Quiz';

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [name, setName] = useState('');

  const handleStartQuiz = () => {
    if (name.trim()) {
      setQuizStarted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      {quizStarted ? (
        <Quiz name={name.trim()} />
      ) : (
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 md:p-8 text-center">
          <div className="mb-8">
            {' '}
            <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
              {' '}
              TEDx<span className="text-gray-900">NTUA</span>{' '}
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600">Organizing Team Quiz</h3>
          </div>

          <div className="mb-6">
            {' '}
            <label
              htmlFor="nameInput"
              className="block text-sm font-medium text-gray-700 mb-2 text-left"
            >
              Enter Your Name to Begin:
            </label>
            <input
              type="text"
              id="nameInput"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              className="
                w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm
                text-gray-900 bg-white focus:outline-none focus:ring-2
                focus:ring-red-400 focus:border-red-400 transition duration-150 ease-in-out
              "
              autoFocus
            />
          </div>

          <button
            onClick={handleStartQuiz}
            disabled={!name.trim()}
            className={`
              w-full px-8 py-3 rounded-lg text-white font-semibold
              transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400
              ${
                name.trim()
                  ? 'bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-md hover:shadow-lg active:scale-[0.98]'
                  : 'bg-gray-400 cursor-not-allowed opacity-70'
              }
            `}
          >
            Start Quiz
          </button>

          {!name.trim() && (
            <p className="text-xs text-gray-500 mt-2">Please enter your name to start.</p>
          )}
        </div>
      )}
    </div>
  );
}
