import "./styles.scss";

interface FormHeadingProps {
  title: string;
  description: string;
}

export function FormHeading({ title, description }: FormHeadingProps) {
  return (
    <header className="form__heading">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
