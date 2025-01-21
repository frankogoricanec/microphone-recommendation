import React from "react";

const NoiseToggle = ({ isStudio, setIsStudio }) => {
  return (
    <div className="noise">
      <h2>Gdje snimam?</h2>
      <label>
        <input
          type="radio"
          value="studio"
          checked={isStudio}
          onChange={() => setIsStudio(true)}
        />
        U izoliranom prostoru
      </label>
      <label>
        <input
          type="radio"
          value="noisy"
          checked={!isStudio}
          onChange={() => setIsStudio(false)}
        />
        U prostoru gdje ima vanjskih zvukova
        
      </label>
    </div>
  );
};

export default NoiseToggle;
