import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import AnswerOption from "./AnswerOption";

function QuestionCard({ questionObj, index }) {
    const { selectedAnswers } = useContext(QuizContext);

    return (
        <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: '8px' }}>
            <div className="card-body p-4">

                <h2 className="text-danger mb-3">Question {index + 1}</h2>
                <p className="h5 mb-4">{questionObj.question}</p>


                <ul className="list-group list-group-flush">
                    {questionObj.answers.map((answer, i) => (
                        <li key={i} className="list-group-item border-0 px-0">
                            <AnswerOption
                                answer={answer}
                                questionIndex={index}
                                correctAnswer={questionObj.correctAnswer}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default QuestionCard;