import React, { Component } from 'react';
import { QuizConsumer } from '../context/QuizContext';
import Question from './Question';
import Result from './Result';

class QuizApp extends Component {
    render() {
        return (
            <QuizConsumer>
                {(value) => {
                    const {
                        questions,
                        currentQuestion,
                        score,
                        showResult,
                        handleAnswer,
                        handleRestart,
                    } = value;

                    if (showResult) {
                        return (
                            <Result
                                score={score}
                                total={questions.length}
                                onRestart={handleRestart}
                            />
                        );
                    }


                    return (
                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <h1 style={{ color: '#cc0000', marginBottom: '24px' }}>Quiz App</h1>
                            <Question
                                questionNumber={currentQuestion + 1}
                                total={questions.length}
                                question={questions[currentQuestion].question}
                                options={questions[currentQuestion].options}
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