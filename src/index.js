import React from "react";
import ReactDOM from "react-dom/client";
// import DateCounter from "./dateCounter";
import App from "./app";
import "./quiz.css";

function Quiz() {
  return (
    <div>
      <App/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Quiz />
);
