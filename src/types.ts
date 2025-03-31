export type Question = {
  id: number;
  question: string;
  image_url: string;
  answers: {text: string; score: number}[];
};

export type Quiz = {
  questions: Question[];
};

export type QuizResult = {
  score: number;
};

export type Team = {
  name: string;
  scoreRange: [number, number];
  image_url: string;
};
