import React, { useState } from "react";

const BetSlip = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="betslip">
      <h3>BetSlip</h3>
      <div className="slip">
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
      </div>
    </div>
  );
};

export default BetSlip;
