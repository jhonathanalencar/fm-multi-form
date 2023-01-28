import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Step } from "../Step";
import { stepsData } from "./data";

import "./styles.scss";

interface StepsProps {
  activeStep: string;
  handleSelectStep: (step: number) => void;
}

export function Steps({ activeStep, handleSelectStep }: StepsProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 45em)");

  return (
    <section
      className={`steps ${isAboveMediumScreens ? "bg-desktop" : "bg-mobile"}`}
    >
      <div className="steps__container">
        <nav>
          <ul>
            {stepsData.map((step) => {
              return (
                <Step
                  step={step}
                  key={step.name}
                  activeStep={activeStep}
                  handleSelectStep={handleSelectStep}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
