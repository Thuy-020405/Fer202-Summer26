import logo from './logo.svg';
import './App.css';
import { QuizProvider } from './context/QuizContext';
import QuizApp from './components/QuizApp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}

export default App;


