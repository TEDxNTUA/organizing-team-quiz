import { Quiz } from "src/types";
export const QUIZ: Quiz = {
  questions: [
    {
      id: 1,
      question: "Favorite Color",
      answers: [
        { text: "Κόκκινη Ferrari", score: 4 },
        { text: "Τηγανητό Καρότο", score: 3 },
        { text: "Παγωμένη Μόκα", score: 2 },
        { text: "Πραλινάτο αγάπη μου", score: 1 },
      ],
      correctAnswer: "Κόκκινη Ferrari",
    },
    {
      id: 2,
      question: "State of Mind",
      answers: [
        { text: "Just a chill guy", score: 2 },
        { text: "Demure girl", score: 1 },
        { text: "Preppy girl", score: 4 },
        { text: "Finance guy", score: 3 },
      ],
      correctAnswer: "Just a chill guy",
    },
    {
      id: 3,
      question: "Favorite Animal",
      answers: [
        { text: "Cat", score: 1 },
        { text: "Dog", score: 2 },
        { text: "Snake", score: 3 },
        { text: "Fish", score: 4 },
      ],
      correctAnswer: "Cat",
    },
    {
      id: 4,
      question: "Hogwarts House",
      answers: [
        { text: "Ravenclaw", score: 3 },
        { text: "Gryffindor", score: 4 },
        { text: "Slytherin", score: 1 },
        { text: "Hufflepuff", score: 2 },
      ],
      correctAnswer: "Ravenclaw",
    },
    {
      id: 5,
      question: "Favorite Season",
      answers: [
        { text: "Summer", score: 4 },
        { text: "Fall", score: 2 },
        { text: "Winter", score: 1 },
        { text: "Spring", score: 3 },
      ],
      correctAnswer: "Summer",
    },
    {
      id: 6,
      question: "Favourite Social Media Platform",
      answers: [
        { text: "Instagram", score: 1 },
        { text: "TikTok", score: 3 },
        { text: "Facebook", score: 2 },
        { text: "LinkedIn", score: 4 },
      ],
      correctAnswer: "Instagram",
    },
    {
      id: 7,
      question: "Favourite Cheat Meal",
      answers: [
        { text: "Σουβλάκι", score: 3 },
        { text: "Πίτσα", score: 1 },
        { text: "Burger", score: 2 },
        { text: "Sushi", score: 4 },
      ],
      correctAnswer: "Σουβλάκι",
    },
  ],
};
