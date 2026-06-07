import React, { Component } from 'react';

const Result = ({ score, total, onRestart }) => (
    <div>
        <h2>Kết quả</h2>
        <p>Bạn đã trả lời đúng {score} / {total} câu.</p>
        <button onClick={onRestart}>Chơi lại</button>
    </div>
);

Result.defaultProps = {
    score: 0,
    total: 0,
    onRestart: () => {},
};

export default Result;