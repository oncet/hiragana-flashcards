import { useEffect, useState } from "react";

import "./App.css";
import { Card } from "./components/Card";
import syllables from "./syllables";

const rotation = {
  initial: "[transform:rotateY(0)]",
  middle: "[transform:rotateY(90deg)]",
};

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isRomaji, setIsRomaji] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [rejectedCards, setRejectedCards] = useState(false);
  const [approvedCards, setApprovedCards] = useState(false);

  const currentSyllable = syllables[currentPosition];

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.classList.add("dark:bg-slate-900");
    }
  }, []);

  return (
    <div className="flex min-h-svh items-center justify-center gap-6">
      <Card className="dark:bg-red-900">X</Card>
      <Card
        className={
          "font-bold uppercase transition-transform duration-[150ms] " +
          (isRomaji
            ? "dark:bg-green-400 dark:text-slate-900 "
            : "dark:bg-slate-800 ") +
          (isRotated
            ? "ease-in [transform:rotateY(90deg)]"
            : "ease-out [transform:rotateY(0)]")
        }
        onClick={() => {
          setIsRotated(true);
        }}
        onTransitionEnd={() => {
          if (isRotated) {
            setIsRomaji(!isRomaji);
            setIsRotated(false);
          }
        }}
      >
        {isRomaji ? currentSyllable.romaji : currentSyllable.kana}
      </Card>
      <Card className="dark:bg-green-900">〇</Card>
    </div>
  );
};

export default App;
