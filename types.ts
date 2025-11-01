
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface Answer {
  selected: number;
  isCorrect: boolean;
}
