import React, { useState } from "react";
import "../styles/App.css";
import "./QuestionCard";
import QuestionCard from "./QuestionCard";
import {
  Categories,
  fetchQuestions,
  QuestionFormat,
  QuestionType,
} from "../scripts/fetchApi";

const TOTAL_QUESTIONS = 10;

export type UserAnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionFormat[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [complete, setComplete] = useState<boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    setComplete(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Categories.SCIENCE,
      QuestionType.MULTIPLE
    );

    setQuestions(newQuestions);
    setUserAnswers([]);
    setLoading(false);
    setScore(0);
    setNumber(0);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (complete) return;

    const answer = e.currentTarget.value;
    const correctAnswer = questions[number].correct_answer;
    const correct = answer === correctAnswer;
    if (correct) setScore(score + 1);

    const userAnswerObject = {
      question: questions[number].question,
      answer,
      correctAnswer,
      correct,
    };

    setUserAnswers([...userAnswers, userAnswerObject]);
  };

  const nextQuestion = () => {
    const next = number + 1;
    if (next >= TOTAL_QUESTIONS) setComplete(true);
    else setNumber(next);
  };

  return (
    <div className="App">
      <h1>Big Brain Quiz</h1>
      {complete || userAnswers.length >= TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          {userAnswers.length >= TOTAL_QUESTIONS ? "Try Again" : "Start"}
        </button>
      ) : null}
      {!complete ? <p className="score">Score: {score}</p> : null}
      {loading ? <p className="loading">Loading Questions...</p> : null}
      {!loading && !complete ? (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswers={userAnswers[number]}
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
        />
      ) : null}
      {!complete &&
      !loading &&
      userAnswers.length >= number + 1 &&
      number < TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
