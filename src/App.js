import React from "react";
import ReactDOM from "react-dom";
import Match from "./Match";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Betting App"),
    React.createElement(Match, {
      time: "1.30",
      home: "Manchester United",
      away: "Liverpool",
      win: "1.12",
      draw: "2.5",
      loss: "3.0",
    }),
    React.createElement(Match, {
      time: "1.40",
      home: "Arsenal",
      away: "Tottenham",
      win: "1.12",
      draw: "2.5",
      loss: "3.0",
    }),
    React.createElement(Match, {
      time: "1.50",
      home: "Wolves",
      away: "Watford",
      win: "1.12",
      draw: "2.5",
      loss: "3.0",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
