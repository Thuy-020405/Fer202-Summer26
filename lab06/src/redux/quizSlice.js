import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      correctAnswer: 'script',
      selectedAnswer: null,
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these',
      ],
      correctAnswer: 'Storing numbers, dates, or other values',
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "Which of the following can't be done with client-side JavaScript?",
      options: [
        'Validating a form',
        "Sending a form's contents by email",
        'Reading a local file',
        'Changing page content',
      ],
      correctAnswer: 'Reading a local file',
      selectedAnswer: null,
    },
    {
      id: 4,
      question: 'How do you write "Hello World" in an alert box?',
      options: ['alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'msgBox("Hello World")'],
      correctAnswer: 'alert("Hello World")',
      selectedAnswer: null,
    },
    {
      id: 5,
      question: 'How do you create a function in JavaScript?',
      options: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'create myFunction()'],
      correctAnswer: 'function myFunction()',
      selectedAnswer: null,
    },
    {
      id: 6,
      question: 'How does a WHILE loop start?',
      options: ['while (i <= 10)', 'while i = 1 to 10', 'while (i <= 10; i++)', 'while i <= 10'],
      correctAnswer: 'while (i <= 10)',
      selectedAnswer: null,
    },
    {
      id: 7,
      question: 'How to write an IF statement in JavaScript?',
      options: ['if i = 5 then', 'if i = 5', 'if (i == 5)', 'if i == 5 then'],
      correctAnswer: 'if (i == 5)',
      selectedAnswer: null,
    },
    {
      id: 8,
      question: 'Which event occurs when the user clicks on an HTML element?',
      options: ['onmouseclick', 'onchange', 'onclick', 'onmouseover'],
      correctAnswer: 'onclick',
      selectedAnswer: null,
    },
    {
      id: 9,
      question: 'How can you add a comment in JavaScript?',
      options: ["'This is a comment", '<!--This is a comment-->', '//This is a comment', '**This is a comment'],
      correctAnswer: '//This is a comment',
      selectedAnswer: null,
    },
    {
      id: 10,
      question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
      options: [
        'document.getElement("demo").innerHTML = "Hello World!"',
        '#demo.innerHTML = "Hello World!"',
        'document.getElementById("demo").innerHTML = "Hello World!"',
        'document.getElementById("demo").innerText = "Hello World!"',
      ],
      correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!"',
      selectedAnswer: null,
    },
  ],
  currentIndex: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setUserAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const q = state.questions.find((item) => item.id === questionId);
      if (q) q.selectedAnswer = answer;
    },
    checkAnswers: (state) => {
      state.submitted = true;
    },
    resetQuiz: (state) => {
      state.questions.forEach((q) => (q.selectedAnswer = null));
      state.submitted = false;
      state.currentIndex = 0;
    },
    firstQuestion: (state) => {
      state.currentIndex = 0;
    },
    prevQuestion: (state) => {
      state.currentIndex = Math.max(0, state.currentIndex - 1);
    },
    nextQuestion: (state) => {
      state.currentIndex = Math.min(state.questions.length - 1, state.currentIndex + 1);
    },
    lastQuestion: (state) => {
      state.currentIndex = state.questions.length - 1;
    },
    goToQuestion: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const {
  setUserAnswer,
  checkAnswers,
  resetQuiz,
  firstQuestion,
  prevQuestion,
  nextQuestion,
  lastQuestion,
  goToQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;