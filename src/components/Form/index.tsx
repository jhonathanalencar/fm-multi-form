import { ReactNode } from "react";
import { useContextSelector } from "use-context-selector";

import { FormContext } from "../../contexts/FormContext";
import { AddonsForm } from "./components/AddonsForm";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { SelectPlanForm } from "./components/SelectPlanForm";
import { SummaryForm } from "./components/SummaryForm";
import "./styles.scss";

const content: { [key: number]: ReactNode } = {
  1: <PersonalInfoForm />,
  2: <SelectPlanForm />,
  3: <AddonsForm />,
  4: <SummaryForm />,
};

export function Form() {
  const step = useContextSelector(FormContext, (state) => state.step);
  return (
    <div className="form">
      <div className="form__container">
        <div className="form__content">{content[step]}</div>
      </div>
    </div>
  );
}
