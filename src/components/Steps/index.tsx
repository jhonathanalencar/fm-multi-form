import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/classNames";
import { Step } from "./components/Step";

import "./styles.scss";

export function Steps() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 60em)");

  return (
    <div className="steps">
      <div
        className={cn(
          "steps__container",
          isAboveMediumScreens ? "bg-desktop" : "bg-mobile"
        )}
      >
        <div className="steps__content">
          <Step step="1" />
          <Step step="2" />
          <Step step="3" />
          <Step step="4" />
        </div>
      </div>
    </div>
  );
}
