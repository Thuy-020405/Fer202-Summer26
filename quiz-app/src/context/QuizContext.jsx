import React, { Component } from 'react';
import questions from "../data/questions";

const { Provider, Consumer } = React.createContext();

class QuizProvider extends React.Component {
  state = {
    currentQuestionIndex: 0,
    score: 0,
    showResults: false,
  };

    handleAnswer = (selectedOption) => {
    const { currentQuestionIndex, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;
    const nextQuestionIndex = currentQuestionIndex + 1;

    this.setState({
        score: isCorrect ? score + 1 : score,
        currentQuestionIndex: nextQuestionIndex,
        showResults: nextQuestionIndex >= questions.length,
    });
  };

  restartQuiz = () => {
    this.setState({
      currentQuestionIndex: 0,
      score: 0,
      showResults: false,
    });
  };

  render() {
    return (
        <Provider
            value={{
                ...this.state,
                questions,
                handleAnswer: this.handleAnswer,
                restartQuiz: this.restartQuiz,
            }}
        >
            {this.props.children}
        </Provider>
    );
  }
}

export { QuizProvider, Consumer as QuizConsumer };
