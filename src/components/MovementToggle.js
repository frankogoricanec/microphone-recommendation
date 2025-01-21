import React from "react";

const MovementToggle = ({ freedomRequired, setFreedomRequired }) => {
  return (
    <div className="movement">
      <h2>Treba li mi sloboda kretanja?</h2>
      <label>
        <input
          type="radio"
          value="yes"
          checked={freedomRequired}
          onChange={() => setFreedomRequired(true)}
        />
       Da
      </label>
      <label>
        <input
          type="radio"
          value="no"
          checked={!freedomRequired}
          onChange={() => setFreedomRequired(false)}
        />
        Ne
      </label>
    </div>
  );
};

export default MovementToggle;
