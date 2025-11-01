
import React from 'react';

interface ScoreModalProps {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onClose: () => void;
}

export const ScoreModal: React.FC<ScoreModalProps> = ({ score, correctAnswers, totalQuestions, onClose }) => {
  const getFeedback = () => {
    if (score >= 8) {
      return { message: "Xuất sắc! 🌟", color: "text-green-500" };
    }
    if (score >= 5) {
      return { message: "Tốt lắm! 👍", color: "text-blue-500" };
    }
    return { message: "Cố lên nhé 💪", color: "text-orange-500" };
  };

  const feedback = getFeedback();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Kết quả của bạn</h2>
        <p className="text-gray-600 mb-6">Bạn đã trả lời đúng {correctAnswers} / {totalQuestions} câu.</p>
        
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-gray-700">Điểm số</p>
          <p className="text-6xl font-extrabold text-blue-600 my-2">{score.toFixed(2)}</p>
          <p className={`text-2xl font-bold ${feedback.color}`}>{feedback.message}</p>
        </div>

        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};
