
import React from 'react';
import type { Question, Answer } from '../types';

interface QuestionCardProps {
  questionIndex: number;
  question: Question;
  userAnswer?: Answer;
  onAnswerSelect: (questionIndex: number, optionIndex: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ questionIndex, question, userAnswer, onAnswerSelect }) => {
  const getButtonClass = (optionIndex: number): string => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 font-semibold disabled:cursor-not-allowed";

    if (!userAnswer) {
      return `${baseClass} bg-white border-gray-300 hover:bg-blue-100 hover:border-blue-400`;
    }

    const isCorrectOption = optionIndex === question.correctAnswer;
    const isSelectedOption = optionIndex === userAnswer.selected;

    if (isCorrectOption) {
      return `${baseClass} bg-[#90EE90] border-green-500 text-green-900`;
    }

    if (isSelectedOption && !userAnswer.isCorrect) {
      return `${baseClass} bg-[#FFB6C1] border-red-500 text-red-900`;
    }

    return `${baseClass} bg-gray-100 border-gray-300 text-gray-500 disabled:opacity-70`;
  };

  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-4">
        <span className="text-blue-600">Câu {questionIndex + 1}:</span> {question.question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(questionIndex, index)}
            disabled={!!userAnswer}
            className={getButtonClass(index)}
          >
            {String.fromCharCode(65 + index)}. {option}
          </button>
        ))}
      </div>
    </div>
  );
};
