import React from "react";

const BudgetSlider = ({ budget, setBudget }) => {
  return (
    <div className="budget">
      <label>
        <h2>Budžet: {budget}  €</h2>
        <input
          type="range"
          min="0"
          max="700"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default BudgetSlider;
