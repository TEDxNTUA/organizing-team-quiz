export type Question = {
  id: number;
  question: string;
  answers: { text: string; score: number }[];
  correctAnswer: string;
};

export type Quiz = {
  questions: Question[];
};

export type QuizResult = {
  score: number;
};
