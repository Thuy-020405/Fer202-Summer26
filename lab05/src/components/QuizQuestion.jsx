function QuizQuestion({ questionData, selectedOption, onSelectOption }) {
  const { question, options } = questionData;

  return (
    <div className="quiz-question card mb-3 p-3">
      <h5>{question}</h5>
      <div className="options mt-2">
        {options.map((option, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={`question-${questionData.id}`}
              id={`q${questionData.id}-opt${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelectOption(questionData.id, option)}
            />
            <label
              className="form-check-label"
              htmlFor={`q${questionData.id}-opt${index}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;