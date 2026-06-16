import { useState, useContext } from 'react';
import { quizData } from '../data/quizData';
import { QuizContext } from '../context/QuizContext';
import QuestionCard from './QuestionCard';

function QuizApp() {
    const { selectedAnswers } = useContext(QuizContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const calculateScore = () => {
        let score = 0;
        quizData.forEach((q, index) => {
            if (selectedAnswers[index] === q.correctAnswer) {
                score += 1;
            }
        });
        return score;
    };

    const handleNext = () => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsFinished(true);
        }
    };


    if (isFinished) {
        return (
            <div className="container mt-5" style={{ padding: "20px" }}>
                <h1 className="text-danger font-weight-bold">Quiz Completed!</h1>
                <h2 className="mt-3">Your score: {calculateScore()}</h2>
            </div>
        );
    }


    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <QuestionCard
                questionObj={quizData[currentIndex]}
                index={currentIndex}
            />
            <button
                className="btn btn-danger mt-3"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
}

export default QuizApp;