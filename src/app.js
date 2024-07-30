import { useReducer } from "react";
import Header from "./components/header";
import Main from "./components/main";
import StartScreen from "./components/startScreen";
import Question from "./components/questions";
import NextButton from "./components/nextbtn";
import Progress from "./components/progress";
import ScreenFinish from "./components/screenFinish";
import Timer from "./components/timer";

const initialState = {
  questions: [],
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemainig: 10,
};
let SECS_PER_QUE = 40;
// function reducer(state, action) {
//   switch (action.type) {
//     case "dataRecieved":
//       return {
//         ...state,
//         status: "data",
//         questions: action.payload,
//         secondsRemainig: state.questions.length * SECS_PER_QUE,
//       };

//     case "newAnswer":
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };

//     case "nextQuestion":
//       return { ...state, index: state.index + 1, answer: null };

//     case "finished":
//       return {
//         ...state,
//         status: "finish",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };

//     case "tick":
//       return {
//         ...state,
//         secondsRemainig: state.secondsRemainig - 1,
//         status: state.secondsRemainig === 0 ? "finish" : state.status,
//       };

//     case "restart":
//       // return{
//       //   ...initialState,
//       //   questions:state.questions,
//       //   status:"ready"
//       // }
//       return {
//         ...state,
//         index: 0,
//         points: 0,
//         answer: null,
//         status: "ready",
//       };

//     default:
//       return "Unknown actions";
//   }
// }

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        status: "data",
        questions: action.payload,
        secondsRemainig: action.payload.length * SECS_PER_QUE,
      };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finished":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "tick":
      return {
        ...state,
        secondsRemainig: state.secondsRemainig - 1,
        status: state.secondsRemainig === 0 ? "finish" : state.status,
      };

    case "restart":
      return {
        ...state,
        index: 0,
        points: 0,
        answer: null,
        status: "ready",
        secondsRemainig: state.questions.length * SECS_PER_QUE,
      };

    default:
      return state;
  }
}


export default function App() {
  const [
    { status, questions, index, answer, points, highscore, secondsRemainig },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(function (pre, cur) {
    return pre + cur.points;
  }, 0);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "data" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              questions={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Timer dispatch={dispatch} secondsRemaining={secondsRemainig} />
            <NextButton
              answer={answer}
              dispatch={dispatch}
              numQuestions={numQuestions}
              index={index}
            />
          </>
        )}
        {status === "finish" && (
          <ScreenFinish
            highscore={highscore}
            maxpossiblePoints={maxPossiblePoints}
            points={points}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
