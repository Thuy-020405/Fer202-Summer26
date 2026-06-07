import React, { Component } from 'react';

const Question = ({ question, options, onAnswer }) => (
    <div>
        <h2>{question}</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {options.map((option, index) => (
                <li key={index} style={{ margin: "10px 0" }}>
                    <button onClick={() => onAnswer(option)}>{option}</button>
                </li>
            ))}
        </ul>
    </div>
        );

Question.defaultProps = {
    question: "Không có câu hỏi nào",
    options: [],
    onAnswer: () => {},
};

export default Question;
