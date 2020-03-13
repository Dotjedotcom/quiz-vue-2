export const QUIZ_DATA = {
  title: 'Javascript Quiz',
  questions: [
    {
      title: 'What is the outcome of the following code snippet: <code>"12345678".length</code>',
      answers: [
          { answer: '7', remark: 'Nooooo' },
          { answer: '8', remark: 'Yay, you can count!' },
          { answer:'NaN', remark: 'It will return a number' }
      ],
      correct: 1,
      answer: null,
    },
    {
      title: 'What is the outcome of the following code snippet: <code>"12345678".indexOf(\'678 \')</code>',
      answers: [
        { answer: '-1', remark: 'Right, you are ;-)' },
        { answer: '6', remark: 'Oh noeees, you missed the space!' },
        { answer: '5', remark: 'You can\'t count' },
        { answer: '-1', remark: 'Right, you are ;-)' },
        { answer: '6', remark: 'Oh noeees, you missed the space!' },
        { answer: '5', remark: 'You can\'t count' }
      ],
      correct: 0,
      answer: null,
    },
    {
      title: 'What is the outcome of the following code snippet: <code>"12345678".indexOf(67)</code>',
      answers: [
        { answer: '-1', remark: 'Right, you are NOT ;-)' },
        { answer: '4', remark: 'Oh noeees!' },
        { answer: '5', remark: 'You can\'t count' },
        { answer: '6', remark: 'Whoehaa, you understand' }
      ],
      correct: 3,
      answer: null,
    },
  ],
  score: 0,
  currentQuestion: 0
};