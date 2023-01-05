import { ReactNode } from "react";
import { useContextSelector } from "use-context-selector";

import { FormContext } from "../../contexts/FormContext";
import { cn } from "../../utils/classNames";
import { Step } from "./components/Step";

import "./styles.scss";

export function Steps() {
  const steps = useContextSelector(FormContext, (state) => state.steps);
  const isAboveMediumScreens = useContextSelector(
    FormContext,
    (state) => state.isAboveMediumScreens
  );

  let content: ReactNode;

  if (isAboveMediumScreens) {
    content = steps.map((step, i) => {
      return (
        <div key={`step-${step.text}`} className="steps__content-info">
          <Step step={step.position} text={step.text} />

          <div>
            <span>{`Step ${step.position}`}</span>
            <strong>{step.text}</strong>
          </div>
        </div>
      );
    });
  } else {
    content = steps.map((step, i) => {
      return <Step key={`step-${step.text}`} step={i + 1} text={step.text} />;
    });
  }

  return (
    <div className="steps">
      <div
        className={cn(
          "steps__container",
          isAboveMediumScreens ? "bg-desktop" : "bg-mobile"
        )}
      >
        <div className="steps__content">{content}</div>
      </div>
    </div>
  );
}
