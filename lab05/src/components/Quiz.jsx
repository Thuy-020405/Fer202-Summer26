import { useState } from "react";
import { Link } from "react-router-dom";
import { quizQuestions } from "../data/quizData";
import QuizQuestion from "./QuizQuestion";

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelectOption = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quizQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) {
        correctCount += 1;
      }
    });
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Quiz - Restaurant Questions</h2>

      {submitted ? (
        <div className="result-box text-center">
          <h4>
            You scored {score}/{quizQuestions.length} correct answers
          </h4>
          <button className="btn btn-primary mt-3" onClick={handleRetry}>
            Replay
          </button>
          <div className="mt-3">
            <Link to="/">Back to homepage</Link>
          </div>
        </div>
      ) : (
        <>
          {quizQuestions.map((q) => (
            <QuizQuestion
              key={q.id}
              questionData={q}
              selectedOption={answers[q.id]}
              onSelectOption={handleSelectOption}
            />
          ))}

          <button
            className="btn btn-success mt-3"
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== quizQuestions.length}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;