import React from 'react';

const Result = ({ score, total, onRestart }) => (
    <div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                fontFamily: 'Georgia, serif',
                margin: '0 0 8px 0',
            }}>
                Quiz Ended
            </h1>
            <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                fontFamily: 'Georgia, serif',
                margin: '0 0 32px 0',
            }}>
                Your Score: {score} / {total}
            </h1>
        </div>


        <div style={{ textAlign: 'center', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button
                onClick={onRestart}
                style={{
                    padding: '10px 28px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#0066cc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                }}
            >
                Play Again
            </button>
            <button
                onClick={() => alert(`My score: ${score}/${total}`)}
                style={{
                    padding: '10px 28px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                }}
            >
                Share Result
            </button>
        </div>
    </div>
);

Result.defaultProps = {
    score: 0,
    total: 0,
    onRestart: () => { },
};

export default Result;