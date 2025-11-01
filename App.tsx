import React, { useState, useCallback } from 'react';
import { questions } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { ScoreModal } from './components/ScoreModal';
import type { Answer } from './types';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<Map<number, Answer>>(new Map());
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerSelect = useCallback((questionIndex: number, optionIndex: number) => {
    if (answers.has(questionIndex)) {
      return; // Do not allow changing the answer
    }

    const isCorrect = questions[questionIndex].correctAnswer === optionIndex;
    const newAnswers = new Map(answers);
    newAnswers.set(questionIndex, { selected: optionIndex, isCorrect });
    setAnswers(newAnswers);
  }, [answers]);

  const handleReset = () => {
    setAnswers(new Map());
    setShowScore(false);
  };

  const calculateScore = () => {
    setShowScore(true);
  };
  
  // FIX: Explicitly type 'a' as 'Answer' to resolve a type inference issue.
  const correctAnswersCount = Array.from(answers.values()).filter((a: Answer) => a.isCorrect).length;
  const score = (correctAnswersCount / questions.length) * 10;

  return (
    <div className="min-h-screen bg-[#6EC6FF] text-gray-800 p-4 sm:p-8 relative">
      <header className="absolute top-4 left-4">
        <p className="text-lg font-semibold text-[#FF69B4]">🌸 Kiều Ninh</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="text-center my-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            📘 TRẮC NGHIỆM CÔNG NGHỆ 8 📘
          </h1>
          <p className="mt-4 text-2xl text-white font-semibold drop-shadow">
            🎉 Chúc các bạn A6 thi tốt nhé! 🎉
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((q, index) => (
            <QuestionCard
              key={index}
              questionIndex={index}
              question={q}
              userAnswer={answers.get(index)}
              onAnswerSelect={handleAnswerSelect}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sticky bottom-4">
          <button
            onClick={calculateScore}
            className="w-full sm:w-auto px-8 py-4 bg-blue-800 text-white font-bold text-xl rounded-full shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Xem điểm 🎯
          </button>
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold text-xl rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Làm lại 🔄
          </button>
        </div>
      </main>

      {showScore && (
         <ScoreModal 
            score={score} 
            correctAnswers={correctAnswersCount}
            totalQuestions={questions.length}
            onClose={() => setShowScore(false)}
         />
      )}
    </div>
  );
};

export default App;