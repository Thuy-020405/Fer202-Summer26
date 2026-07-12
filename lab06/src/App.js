import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import QuizResult from './components/QuizResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các route Home/About/News/Contact đã có sẵn từ Lab 5, thêm vào đây nếu cần */}
        <Route path="/" element={<Navigate to="/quizzes" replace />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quiz/review" element={<QuizReview />} />
        <Route path="/quiz/result" element={<QuizResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;