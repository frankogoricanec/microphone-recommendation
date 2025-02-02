import React, { useState } from "react";
import BudgetSlider from "./components/BudgetSlider";
import NoiseToggle from "./components/NoiseToggle";
import MovementToggle from "./components/MovementToggle";
import Recommendation from "./components/Recommendation";

import "./App.css";
import PdfButtonTree from "./components/PdfButtonTree";

const App = () => {
  const [budget, setBudget] = useState(300);
  const [isStudio, setIsStudio] = useState(true);
  const [freedomRequired, setFreedomRequired] = useState(false);

  return (
    <div >
      <h1 className="title">Koji mikrofon koristiti?</h1>
      <div className="app">
      <div className="questions">
      <NoiseToggle isStudio={isStudio} setIsStudio={setIsStudio} />
      <MovementToggle
        freedomRequired={freedomRequired}
        setFreedomRequired={setFreedomRequired}
      />
      <BudgetSlider budget={budget} setBudget={setBudget} />

      <PdfButtonTree  />

      </div>
      <Recommendation
        budget={budget}
        isStudio={isStudio}
        freedomRequired={freedomRequired}
      />
      
    </div>

    <div className="credits">by Franko Goričanec @ Fakultet Elektrotehnike i Računarstva </div>

    </div>

    
  );
};

export default App;
