import React from "react";
import { PlayerStats, TOTAL_QUESTIONS } from "./App";

type ScoreProps = {
  onStart: (e: React.MouseEvent<HTMLButtonElement>) => void;
  seeStats: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stats: PlayerStats;
  finishedQuiz: boolean;
  score: number;
};

function ScoreCard(props: ScoreProps) {
  function getRating() {
    if (props.score === 0) return "Bottomless Pit";
    else if (props.score <= 2) return "Unlucky";
    else if (props.score <= 4) return "Small Brain";
    else if (props.score <= 7) return "Average";
    else if (props.score <= 9) return "Big Brain";
    else if (props.stats.totalAttempts < 8) return "Cheater";
    else return "Galaxy Brain";
  }

  function getDescription() {
    if (props.score === 0) return "That was intentional, wasn't it?";
    else if (props.score <= 2)
      return "Wow, you did worse than the average random guesser!";
    else if (props.score <= 4)
      return "It's okay, not everyone can be a big brain.";
    else if (props.score <= 7)
      return "Not bad, but not that impressive either.";
    else if (props.score <= 9)
      return "Congrats, you are a certified big brain! :)";
    else if (props.stats.totalAttempts < 8) return "Nice try, nerd.";
    else return "You really wanted that perfect score, huh?";
  }

  return (
    <div className="score-card">
      {props.finishedQuiz ? (
        <>
          <p>
            Score: {props.score} / {TOTAL_QUESTIONS}
          </p>
          <p className="rank">Your Rank: {getRating()}</p>
          <p className="description">{getDescription()}</p>
          <button className="stats" onClick={props.seeStats}>
            See Stats
          </button>
        </>
      ) : (
        <>
          <p>
            High Score: {props.stats.highScore} / {TOTAL_QUESTIONS}
          </p>
          <p>Times Achieved: {props.stats.timesAchieved}</p>
          <p>Total Attempts: {props.stats.totalAttempts}</p>
        </>
      )}
      <button className="start" onClick={props.onStart}>
        {props.finishedQuiz ? "Try Again" : "Start"}
      </button>
    </div>
  );
}

export default ScoreCard;
