import React from 'react';

const Question = ({ questionNumber, total, question, options, onAnswer }) => (
    <div style={{ border: '1px solid #999', padding: '16px', borderRadius: '4px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 6px 0' }}>
            Question {questionNumber} / {total}
        </h3>
        <p style={{ fontSize: '15px', margin: '0 0 12px 0' }}>{question}</p>
        <div>
            {options.map((option, index) => (
                <div key={index} style={{ borderTop: '1px solid #ddd', padding: '6px 0' }}>

                    <span
                        onClick={() => onAnswer(option)}
                        style={{
                            color: '#0000EE',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontSize: '14px',
                        }}
                    >
                        {option}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

Question.defaultProps = {
    questionNumber: 1,
    total: 0,
    question: 'No question',
    options: [],
    onAnswer: () => { },
};

export default Question;