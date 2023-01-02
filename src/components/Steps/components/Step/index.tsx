import { ButtonHTMLAttributes } from "react";
import { cn } from "../../../../utils/classNames";
import "./styles.scss";

interface StepProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  step: string;
}

export function Step({ step, ...rest }: StepProps) {
  return (
    <button type="button" className="step selected" {...rest}>
      {step}
    </button>
  );
}
