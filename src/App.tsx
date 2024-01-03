import { useEffect, useState } from "react";

import "./App.css";
import { Card } from "./components/Card";
import syllables from "./syllables";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isRomaji, setIsRomaji] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [rejectedSyllables, setRejectedSyllables] = useState<number[]>([]);
  const [approvedSyllables, setApprovedSyllables] = useState<number[]>([]);

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
      <Card
        className="border-4 border-dashed dark:border-red-500 dark:bg-slate-900 dark:text-slate-400"
        onClick={() => {
          setRejectedSyllables([...rejectedSyllables, currentPosition]);
        }}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[100px] w-[100px] text-red-500"
        >
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="currentColor"
            strokeWidth="8"
            stroke-linecap="round"
          />
          <line
            x1="10"
            y1="90"
            x2="90"
            y2="10"
            stroke="currentColor"
            strokeWidth="8"
            stroke-linecap="round"
          />
        </svg>
      </Card>
      <Card
        className={
          "font-bold uppercase transition-transform duration-[150ms] " +
          (isRomaji
            ? "dark:bg-green-400 dark:text-slate-900 "
            : "dark:bg-slate-800 ") +
          (isRotated
            ? "ease-in [transform:rotateY(90deg)] "
            : "ease-out [transform:rotateY(0)] ") +
          (rejectedSyllables.includes(currentPosition)
            ? "[transform:translate(-248px)] "
            : "") +
          (approvedSyllables.includes(currentPosition)
            ? "[transform:translate(248px)] "
            : "")
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
      <Card
        className="border-4 border-dashed dark:border-green-500 dark:bg-slate-900 dark:text-slate-400"
        onClick={() => {
          setApprovedSyllables([...approvedSyllables, currentPosition]);
        }}
      >
        {/* 〇 */}
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[100px] w-[100px] text-green-500"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
        </svg>
      </Card>
    </div>
  );
};

export default App;
