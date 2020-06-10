import React, { useState, useEffect } from "react";

const BetSlip = (props) => {
  const [win, setWin] = useState(win * amount);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setWin(Number(props.betValue) * Number(amount));
  }, [props.betValue, amount]);

  return (
    <div className="betslip">
      <h3>BetSlip</h3>
      <div className="slip">
        <p>Odds @{props.betValue}</p>
        <form>
          <label htmlFor="amount">
            <input
              id="amount"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </form>
        <p>Expeted winning @{parseInt(win)}</p>
      </div>
    </div>
  );
};

export default BetSlip;
