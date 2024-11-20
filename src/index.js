import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";


function Seller() {
  return (
    <div>
      <Router />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Seller />);
