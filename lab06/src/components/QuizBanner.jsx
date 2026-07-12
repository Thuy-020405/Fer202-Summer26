import React from 'react';

function QuizBanner({ title }) {
  return (
    <div className="bg-dark text-white text-center py-5 mb-4">
      <h1 className="fw-bold m-0">{title}</h1>
    </div>
  );
}

export default QuizBanner;