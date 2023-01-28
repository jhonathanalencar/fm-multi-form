import { useState } from "react";

import { Steps } from "./components/Steps";

type StepType = "yourInfo" | "selectPlan" | "addOns" | "summary";

const steps: { [key: number]: StepType } = {
  1: "yourInfo",
  2: "selectPlan",
  3: "addOns",
  4: "summary",
};

export function App() {
  const [activeStep, setActiveStep] = useState<StepType>(steps[1]);

  function handleSelectStep(step: number) {
    setActiveStep(steps[step]);
  }

  return (
    <main className="app">
      <div className="wrapper">
        <Steps activeStep={activeStep} handleSelectStep={handleSelectStep} />
        <section style={{ flex: 1 }}>
          <form></form>
        </section>
        <section>prev & next</section>
      </div>
    </main>
  );
}
