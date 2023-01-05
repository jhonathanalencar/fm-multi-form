import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface FormContextData {
  steps: {
    position: number;
    text: string;
  }[];
  step: number;
  isAboveMediumScreens: boolean;
  canNextStep: boolean;
  canPreviousStep: boolean;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  changeStep: (step: number) => void;
}

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContext = createContext({} as FormContextData);

const steps = [
  {
    position: 1,
    text: "your info",
  },
  {
    position: 2,
    text: "select plan",
  },
  {
    position: 3,
    text: "add-ons",
  },
  {
    position: 4,
    text: "summary",
  },
];

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [step, setStep] = useState(1);
  const isAboveMediumScreens = useMediaQuery("(min-width: 60em)");
  const canNextStep = step < steps.length;
  const canPreviousStep = step !== 1;

  function handleNextStep() {
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    setStep((prev) => prev - 1);
  }

  function changeStep(step: number) {
    setStep(step);
  }

  return (
    <FormContext.Provider
      value={{
        steps,
        step,
        isAboveMediumScreens,
        canNextStep,
        canPreviousStep,
        handleNextStep,
        handlePreviousStep,
        changeStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
