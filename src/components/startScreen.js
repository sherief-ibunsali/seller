const quizQuestions = [
  {
    question: "Which of the following is correct about JavaScript?",
    options: [
      "JavaScript is Object-Oriented language",
      "JavaScript is an Object-Based language",
      "JavaScript is Assembly-language",
      "JavaScript is High-level language",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      "Which one of the following also known as Conditional Expression?",
    options: [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if",
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: 'The "function" and " var" are known as:',
    options: ["Keywords", "Data types", "Declaration statements", "Prototypes"],
    correctOption: 2,
    points: 10,
  },
  {
    question: "Which one of the following is an ternary operator?",
    options: ["?", ":", "-", "+"],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      "In the JavaScript, which one of the following is not considered as an error:?",
    options: [
      "Missing of semicolons",
      "Division by zero",
      "Syntax error",
      "Missing of Bracket",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question:
      ' Which one of the following is not considered as "statement" in the JavaScript?',
    options: ["use strict", "debugger", "if", "with"],
    correctOption: 0,
    points: 20,
  },
  {
    question:
      "Which one of the following keywords is used for defining the function in the JavaScript?",
    options: ["Void", "init", "main", "function"],
    correctOption: 3,
    points: 10,
  },
  {
    question:
      "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters??",
    options: ["search()", "split()", "substr()", "slice()"],
    correctOption: 2,
    points: 20,
  },
  {
    question:
      "Which one of the following operator returns false if both values are equal?",
    options: ["!==", "!=", "!", "All of the above"],
    correctOption: 1,
    points: 20,
  },
  {
    question: "Which of the following type of a variable is volatile??",
    options: [
      "Immutable variable",
      "Dynamic variable",
      "Volatile variable",
      "Mutable variable",
    ],
    correctOption: 3,
    points: 30,
  },
  {
    question: `What will happen if we use the "join()" method along with the "reverse()" method?`,
    options: [
      "It will reverse and concatenates the elements of the array",
      "It will just reverse the element of the array",
      "It will reverse the element and store the elements in the same array",
      "It will store the elements of the specified array in the normal order",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do:?",
    options: [
      "Shows a warning",
      "Ignores the statements",
      "Prompts to complete the statement",
      "Throws an error",
    ],
    correctOption: 1,
    points: 10,
  },
  {
    question: "The linkage of a set of prototype objects is known as?",
    options: [
      "prototype stack",
      "prototype",
      "prototype chain",
      "prototype class",
    ],
    correctOption: 2,
    points: 30,
  },
  {
    question: 'What is the role of the "debugger" statement?',
    options: [
      "It is kind of keyword which is used to debug the entire program at once",
      "It will do nothing, although it is a breakpoint",
      "It will debug the error in that statement",
      "All above mentioned",
    ],
    correctOption: 1,
    points: 30,
  },
  {
    question: "What happens if the return statement has no related expression?",
    options: [
      "It will throw a error",
      "It will throw a exception",
      "It will return the 0 as the value",
      "It will return a undefined value",
    ],
    correctOption: 3,
    points: 30,
  },
];

export default function StartScreen({ dispatch, numQuestions }) {
  return (
    <div>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{quizQuestions.length} questions to test your React mastery</h3>
      <button
        className="btn"
        onClick={() =>
          dispatch({ type: "dataRecieved", payload: quizQuestions })
        }
      >
        Let's Start
      </button>
    </div>
  );
}
