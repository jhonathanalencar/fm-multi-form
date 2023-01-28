import { useMediaQuery } from "../../hooks/useMediaQuery";

import "./styles.scss";

interface StepProps {
  step: {
    step: number;
    title: string;
    name: string;
  };
  activeStep: string;
  handleSelectStep: (step: number) => void;
}

export function Step({ step, activeStep, handleSelectStep }: StepProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 45em)");

  return (
    <li className="step">
      <button
        type="button"
        aria-label={`step ${step.step}`}
        className={activeStep === step.name ? "active" : ""}
        onClick={() => handleSelectStep(step.step)}
      >
        {step.step}
      </button>
      {isAboveMediumScreens ? (
        <div className="step__info">
          <span>STEP {step.step}</span>
          <strong>{step.title}</strong>
        </div>
      ) : null}
    </li>
  );
}
