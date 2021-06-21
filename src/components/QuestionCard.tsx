import React from "react";
import CardProps from "../types/CardProps";

function QuestionCard(props: CardProps) {
  return (
    <div className="question-card">
      <p className="number">
        {props.questionNumber} / {props.totalQuestions}
      </p>

      <p className="question">{props.question}</p>
      <div className="answers">
        {props.answers.map((answer) => (
          <div>
            <button
              disabled={props.userAnswers !== undefined}
              value={answer}
              onClick={props.callback}
            >
              <span>{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
