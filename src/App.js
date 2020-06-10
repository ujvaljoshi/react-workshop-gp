import React from "react";
import ReactDOM from "react-dom";
import MatchList from "./MatchList";

const App = () => {
  return (
    <div>
      <h1>React Workshop!</h1>
      <div className="container">
        <MatchList />
      </div>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
