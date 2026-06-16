import { createContext, useState } from "react";
export const QuizContext = createContext();
export function QuizProvider({ children }) {
    const[selectedAnswers, setSelectedAnswers] = useState({});
    const selectAnswer = (index, answer) => {
        setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
    };
    return (<QuizContext.Provider value={{ selectedAnswers, selectAnswer }}>
            {children}
        </QuizContext.Provider>
    );
}