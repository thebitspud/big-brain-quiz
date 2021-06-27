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
import ScoreCard from "./ScoreCard";
import { useCookies } from "react-cookie";

export const TOTAL_QUESTIONS = 10;

export type UserAnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

export type PlayerStats = {
  highScore: number;
  timesAchieved: number;
  totalAttempts: number;
};

const zeroStats: PlayerStats = {
  highScore: 0,
  timesAchieved: 0,
  totalAttempts: 0,
};

/**
 * Just as a heads up, do not look at my code as an example.
 * This was a practice project that I rushed through and did not
 * bother to follow good coding practices while working on it.
 */

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionFormat[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerObject[]>([]);
  const [score, setScore] = useState<number>(0);
  const [cookies, setCookies] = useCookies(["stats"]);
  const [complete, setComplete] = useState<boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    setComplete(false);
    setScore(0);
    setNumber(0);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Categories.SCIENCE,
      QuestionType.MULTIPLE
    );

    setQuestions(newQuestions);
    setUserAnswers([]);
    setLoading(false);
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
    if (next < TOTAL_QUESTIONS) setNumber(next);
  };

  function updateCookies() {
    const oldStats = cookies.stats ?? zeroStats;

    let newStats: PlayerStats = {
      highScore: Math.max(score, oldStats.highScore),
      timesAchieved:
        score > oldStats.highScore
          ? 1
          : oldStats.timesAchieved + (score === oldStats.highScore ? 1 : 0),
      totalAttempts: (oldStats.totalAttempts += 1),
    };

    setCookies("stats", newStats, { path: "/", maxAge: 157784630 });
  }

  const seeResults = () => {
    updateCookies();
    setComplete(true);
  };

  const resetAnswers = () => {
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Big Brain Quiz &#129504;</h1>
      <div className="info-card">
        {complete ? (
          <ScoreCard
            onStart={startTrivia}
            seeStats={resetAnswers}
            stats={cookies.stats ?? zeroStats}
            finishedQuiz={userAnswers.length >= TOTAL_QUESTIONS}
            score={score}
          />
        ) : (
          <p className="score">
            Score: {score} / {userAnswers.length}
          </p>
        )}
        {loading && <p className="loading">Loading Questions...</p>}
        {!loading && !complete && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswers[number]}
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )}
        {userAnswers.length >= TOTAL_QUESTIONS && !complete && !loading && (
          <button className="results" onClick={seeResults}>
            See Results
          </button>
        )}
        {!complete &&
          !loading &&
          userAnswers.length >= number + 1 &&
          number < TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </div>
      <p id="footer">
        This website uses cookies.{" "}
        <a
          href="https://github.com/thebitspud/big-brain-quiz"
          rel="noreferrer"
          target="_blank"
        >
          Made by Thebitspud (2021).
        </a>
      </p>
    </div>
  );
}

export default App;
