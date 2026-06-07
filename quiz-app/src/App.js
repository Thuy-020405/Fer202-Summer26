import React from "react";
import { QuizProvider } from "./context/QuizContext";
import QuizApp from "./components/QuizApp";

function App() {
  return (
    <QuizProvider>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <QuizApp />
      </div>
    </QuizProvider>
  );
}

export default App;