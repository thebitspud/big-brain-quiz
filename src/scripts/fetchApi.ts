import { shuffleArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum QuestionType {
  MULTIPLE = "multiple",
  TRUE_FALSE = "boolean",
}

export enum Categories {
  SCIENCE = 17,
}

export type QueryQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionFormat = QueryQuestion & { answers: string[] };

export const fetchQuestions = async (
  amount: number,
  category: Categories,
  type: QuestionType
) => {
  const endpoint =
    `https://opentdb.com/api.php?` +
    `amount=${amount}` +
    `&category=${category}` +
    `&type=${type}`;

  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: QuestionFormat) => ({
    ...question,
    answers: shuffleArray([
      question.correct_answer,
      ...question.incorrect_answers,
    ]),
  }));
};
