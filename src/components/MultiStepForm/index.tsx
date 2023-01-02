import { Form } from "../Form";
import { Navigation } from "../Navigation";
import { Steps } from "../Steps";
import "./styles.scss";

export function MultiStepForm() {
  return (
    <section className="multi-step__form">
      <div className="container">
        <Steps />

        <div className="content">
          <Form />

          <Navigation />
        </div>
      </div>
    </section>
  );
}
