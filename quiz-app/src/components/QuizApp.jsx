import React, { Component } from 'react';
import { QuizConsumer} from "../context/QuizContext";
import Question from "./Question";
import Result from "./Result";

class QuizApp extends Component {
    render() {
        return (

            <QuizConsumer>
                {(value) => {
                    const {questions, currentQuestionIndex, showResults, score, restartQuiz, handleAnswer} = value;
                    if (showResults) {
                        return (
                        <Result score={score}
                         total={questions.length} 
                         onRestart={restartQuiz} 
                        />
                        );

                    }

                    return (
                        <div>
                            <h1>Quiz App</h1>
                            <p>Câu {currentQuestionIndex + 1}/ {questions.length}</p>
                            <Question
                                question={questions[currentQuestionIndex].question}
                                options={questions[currentQuestionIndex].options}
                                onAnswer={handleAnswer}
                            />
                        </div>
                    );
                }}
            </QuizConsumer>
        );
    }
}

export default QuizApp;
                        
                