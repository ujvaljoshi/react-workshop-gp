import React from "react";

const Match = (props) => {
  return React.createElement("div", {}, [
    React.createElement("p", {}, props.time),
    React.createElement("p", {}, props.home),
    React.createElement("p", {}, props.away),
    React.createElement("p", {}, props.win),
    React.createElement("p", {}, props.draw),
    React.createElement("p", {}, props.loss),
  ]);
};

export default Match;
