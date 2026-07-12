import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { goToQuestion } from '../redux/quizSlice';
import TopNavBar from './TopNavBar';
import QuizBanner from './QuizBanner';
import QuizActionBar from './QuizActionBar';

function QuizReview() {
  const { questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoTo = (index) => {
    dispatch(goToQuestion(index));
    navigate('/quizzes');
  };

  return (
    <div>
      <TopNavBar />
      <QuizBanner title="Quiz Review" />

      <Container>
        <Row className="g-3 mb-4">
          {questions.map((q, index) => (
            <Col xs={6} md={3} lg={2} key={q.id}>
              <Card bg="success" bg-opacity="25" className="bg-opacity-25 border-0 h-100">
                <Card.Body>
                  <Card.Link
                    as="button"
                    onClick={() => handleGoTo(index)}
                    className="btn btn-link fw-bold text-success p-0 mb-2"
                  >
                    Question No {index + 1}
                  </Card.Link>
                  <div className="fw-bold text-success text-decoration-underline">
                    {q.selectedAnswer ? 'Answered' : 'Not answered'}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <hr />
        <QuizActionBar />
      </Container>
    </div>
  );
}

export default QuizReview;