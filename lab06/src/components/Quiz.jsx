import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  setUserAnswer,
  firstQuestion,
  prevQuestion,
  nextQuestion,
  lastQuestion,
} from '../redux/quizSlice';
import TopNavBar from './TopNavBar';
import QuizBanner from './QuizBanner';
import QuizActionBar from './QuizActionBar';

function Quiz() {
  const { questions, currentIndex } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const currentQuestion = questions[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  const handleSelect = (option) => {
    dispatch(setUserAnswer({ questionId: currentQuestion.id, answer: option }));
  };

  return (
    <div>
      <TopNavBar />
      <QuizBanner title="JavaScript Quiz" />

      <Container>
        <p className="fs-5 mb-3">
          <strong>Q.{currentIndex + 1}</strong> {currentQuestion.question}
        </p>

        <Row className="g-3 mb-4">
          {currentQuestion.options.map((option) => (
            <Col md={6} key={option}>
              <label
                className="d-flex align-items-center gap-2 rounded p-3 w-100 mb-0"
                style={{ backgroundColor: '#d6e4fb', cursor: 'pointer' }}
                onClick={() => handleSelect(option)}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  checked={currentQuestion.selectedAnswer === option}
                  readOnly
                />
                {option}
              </label>
            </Col>
          ))}
        </Row>

        <hr />

        <div className="d-flex justify-content-center gap-2 mb-3">
          <Button
            style={{ backgroundColor: '#6ea8fe', border: 'none' }}
            disabled={isFirst}
            onClick={() => dispatch(firstQuestion())}
          >
            First
          </Button>
          <Button
            style={{ backgroundColor: '#6ea8fe', border: 'none' }}
            disabled={isFirst}
            onClick={() => dispatch(prevQuestion())}
          >
            Prev
          </Button>
          <Button
            style={{ backgroundColor: '#0d6efd', border: 'none' }}
            disabled={isLast}
            onClick={() => dispatch(nextQuestion())}
          >
            Next
          </Button>
          <Button
            style={{ backgroundColor: '#0d6efd', border: 'none' }}
            disabled={isLast}
            onClick={() => dispatch(lastQuestion())}
          >
            Last
          </Button>
        </div>

        <hr />

        <QuizActionBar />
      </Container>
    </div>
  );
}

export default Quiz;