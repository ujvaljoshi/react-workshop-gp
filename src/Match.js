import React from "react";

const Match = (props) => {
  return (
    <div className="match">
      <div className="time">
        <p>{props.time}</p>
      </div>

      <div className="teams">
        <p>{props.home}</p>
        <p className="vs">vs</p>
        <p>{props.away}</p>
      </div>

      <div className="odds">
        <button className="win">{props.win}</button>
        <button className="draw">{props.draw}</button>
        <button className="loss">{props.loss}</button>
      </div>
    </div>
  );
};

export default Match;
