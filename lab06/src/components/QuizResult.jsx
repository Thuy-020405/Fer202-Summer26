import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Alert } from 'react-bootstrap';
import TopNavBar from './TopNavBar';
import QuizBanner from './QuizBanner';
import QuizActionBar from './QuizActionBar';

function QuizResult() {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <div>
      <TopNavBar />
      <QuizBanner title="Quiz Review" />

      <Container>
        {questions.map((q, index) => {
          const isCorrect = q.selectedAnswer === q.correctAnswer;
          return (
            <Alert key={q.id} variant={isCorrect ? 'success' : 'danger'} className="mb-3">
              <p className="fw-bold mb-3">
                Q{index + 1}. {q.question}
              </p>
              {q.options.map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  readOnly
                  checked={q.selectedAnswer === option}
                  label={option}
                  className={q.selectedAnswer === option ? 'text-dark' : 'text-muted'}
                />
              ))}
              {!isCorrect && (
                <div className="bg-secondary bg-opacity-25 rounded p-2 mt-3">
                  Right answer is: <strong>{q.correctAnswer}</strong>
                </div>
              )}
            </Alert>
          );
        })}

        <hr />
        <QuizActionBar />
      </Container>
    </div>
  );
}

export default QuizResult;