import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAnswers } from '../redux/quizSlice';

function QuizActionBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(checkAnswers());
    navigate('/quiz/result');
  };

  const btnStyle = { backgroundColor: '#22d3ee', border: 'none', color: '#063846' };

  return (
    <div className="d-flex gap-2 mt-4">
      <Button style={btnStyle} onClick={() => navigate('/quizzes')}>
        Quiz
      </Button>
      <Button style={btnStyle} onClick={() => navigate('/quiz/review')}>
        Quiz Review
      </Button>
      <Button style={btnStyle} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default QuizActionBar;