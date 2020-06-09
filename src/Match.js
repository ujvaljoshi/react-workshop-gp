import React from "react";

const Match = (props) => {
  return (
    <div className="match">
      <div className="time">
        <p>{props.time}</p>
      </div>

      <div className="teams">
        <p>{props.home}</p>
        <p>{props.away}</p>
      </div>

      <div className="odds">
        <p>{props.win}</p>
        <p>{props.draw}</p>
        <p>{props.loss}</p>
      </div>
    </div>
  );
};

export default Match;
