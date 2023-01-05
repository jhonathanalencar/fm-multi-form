import { MultiStepForm } from "./components/MultiStepForm";
import { FormContextProvider } from "./contexts/FormContext";

export function App() {
  return (
    <main className="app">
      <FormContextProvider>
        <MultiStepForm />
      </FormContextProvider>
    </main>
  );
}
