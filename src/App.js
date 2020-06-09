import React from "react";
import ReactDOM from "react-dom";
import Match from "./Match";

const App = () => {
  return (
    <div>
      <h1>React Workshop!</h1>
      <div className="container">
        <div className="matchlist">
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
          <Match
            time="1.30"
            home="Manchester United"
            away="Liverpool"
            win="1.12"
            draw="3"
            loss="5"
          />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
