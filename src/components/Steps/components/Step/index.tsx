import { useContextSelector } from "use-context-selector";

import { FormContext } from "../../../../contexts/FormContext";
import { cn } from "../../../../utils/classNames";

import "./styles.scss";

interface StepProps {
  step: number;
  text: string;
}

export function Step({ step, text, ...rest }: StepProps) {
  const currentStep = useContextSelector(FormContext, (state) => state.step);
  const changeStep = useContextSelector(
    FormContext,
    (state) => state.changeStep
  );

  return (
    <button
      type="button"
      aria-label={text}
      className={cn("step", step === currentStep ? "selected" : "")}
      onClick={() => changeStep(step)}
    >
      {step}
    </button>
  );
}
