import React from 'react';
import { QuizProvider } from './context/QuizContext';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <QuizProvider>
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
        <QuizApp />
      </div>
    </QuizProvider>
  );
}

export default App;