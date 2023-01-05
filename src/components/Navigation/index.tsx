import { useContextSelector } from "use-context-selector";
import { FormContext } from "../../contexts/FormContext";

import "./styles.scss";

export function Navigation() {
  const nextStep = useContextSelector(
    FormContext,
    (state) => state.handleNextStep
  );
  const previousStep = useContextSelector(
    FormContext,
    (state) => state.handlePreviousStep
  );
  const canNextStep = useContextSelector(
    FormContext,
    (state) => state.canNextStep
  );
  const canPreviousStep = useContextSelector(
    FormContext,
    (state) => state.canPreviousStep
  );

  return (
    <div className="buttons">
      <div className="buttons__container">
        <button
          type="button"
          onClick={previousStep}
          disabled={!canPreviousStep}
        >
          Go back
        </button>
        <button type="button" onClick={nextStep} disabled={!canNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}
