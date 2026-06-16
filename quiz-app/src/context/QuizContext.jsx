import React, { Component } from 'react';
import questions from '../data/questions';

const { Provider, Consumer } = React.createContext();

class QuizProvider extends Component {
  state = {
    currentQuestion: 0,
    score: 0,
    showResult: false,
  };


  handleAnswer = (selectedAnswer) => {
    const { currentQuestion, score } = this.state;
    const correct = questions[currentQuestion].correctAnswer;

    const newScore = selectedAnswer === correct ? score + 1 : score;
    const next = currentQuestion + 1;

    this.setState({
      score: newScore,
      currentQuestion: next,
      showResult: next >= questions.length,
    });
  };


  handleRestart = () => {
    this.setState({ currentQuestion: 0, score: 0, showResult: false });
  };

  render() {
    return (
      <Provider value={{
        questions,
        currentQuestion: this.state.currentQuestion,
        score: this.state.score,
        showResult: this.state.showResult,
        handleAnswer: this.handleAnswer,
        handleRestart: this.handleRestart,
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { QuizProvider, Consumer as QuizConsumer };