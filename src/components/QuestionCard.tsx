import React from "react";
import CardProps from "../types/CardProps";

function QuestionCard(props: CardProps) {
  const getBackgroundColor = (answer: string) => {
    if (answer === props.userAnswer?.correctAnswer) return "palegreen";
    else if (answer === props.userAnswer?.answer) return "lightcoral";
    else return "white";
  };

  // noinspection SpellCheckingInspection
  return (
    <div className="QuestionCard">
      <p className="number">
        Question {props.questionNumber} of {props.totalQuestions}
      </p>

      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: props.question }}
      />
      <div className="answers">
        {props.answers.map((answer) => (
          <div>
            <button
              disabled={props.userAnswer !== undefined}
              value={answer}
              onClick={props.callback}
              style={{ backgroundColor: getBackgroundColor(answer) }}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
