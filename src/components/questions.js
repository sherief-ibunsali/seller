export default function Question({ questions, answer, dispatch }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
}

function Option({ questions, answer, dispatch }) {
  let hasAnswered = answer !== null;
  return (
    <div className="options">
      {questions.options.map(function (opt, i) {
        return (
          <button
            key={i}
            className={`btn btn-option ${answer === i ? "answer" : ""} ${
              hasAnswered
                ? i === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
