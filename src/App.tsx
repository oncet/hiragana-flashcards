import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex h-96 max-w-72 flex-grow items-center justify-center rounded-xl text-9xl font-bold dark:bg-slate-800 dark:text-slate-300">
        <div>あ</div>
      </div>
    </div>
  );
};

export default App;
