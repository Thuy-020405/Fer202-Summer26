import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

function AnswerOption({ answer, questionIndex, correctAnswer }) {
    const { selectedAnswers, selectAnswer } = useContext(QuizContext);
    const chosen = selectedAnswers[questionIndex];


    let textColor = "text-dark";
    if (chosen) {
        if (answer === correctAnswer) textColor = "text-success fw-bold";
        else if (answer === chosen) textColor = "text-danger fw-bold";
    }

    return (
        <div className={`form-check p-3 border rounded mb-2 ${chosen ? 'bg-light' : ''}`}>
            <label className={`form-check-label w-100 ${textColor}`} style={{ cursor: 'pointer' }}>
                <input
                    className="form-check-input me-2"
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={answer}
                    checked={chosen === answer}
                    onChange={() => selectAnswer(questionIndex, answer)}
                    disabled={!!chosen}
                />
                {answer}
            </label>
        </div>
    );
}

export default AnswerOption;