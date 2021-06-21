import React from "react";
import { UserAnswerObject } from "../components/App";

type CardProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswers: UserAnswerObject;
  questionNumber: number;
  totalQuestions: number;
};

export default CardProps;
