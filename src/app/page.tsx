"use client";
import { useState } from "react";
import Quiz from "@components/Quiz";

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="container mt-5 ml-5">
      <div className="text-center">
        <h1 className="text-success mtb-1 ">TEDxNTUA</h1>
        <h3 className="mb-4">Organizing Team Quiz</h3>
      </div>

      {quizStarted ? (
        <Quiz name={name} />
      ) : (
        <>
          <div className="mb-3 w-[300px] mx-auto">
            <label htmlFor="nameInput" className="form-label">
              Enter Your Name:
            </label>
            <input
              type="text"
              className="form-control border-black border-2 rounded-md bg-amber-50"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            onClick={() => setQuizStarted(true)}
            className="btn btn-primary"
            disabled={!name.trim()} // Disable button if name is empty or whitespace
          >
            Start Quiz
          </button>
        </>
      )}
    </div>
  );
}
