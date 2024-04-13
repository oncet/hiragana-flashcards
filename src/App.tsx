import { useEffect, useState } from "react";

import "./App.css";
import { Main } from "./components/Main";
import Circle from "./components/Circle";
import Cross from "./components/Cross";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.classList.add("dark:text-white");
      bodyElement.classList.add("dark:bg-slate-950");
      bodyElement.classList.add("border");
      bodyElement.classList.add("border-slate-950");
    }
  }, []);

  return (
    <div className="flex flex-col items-center h-svh justify-center gap-16">
      <div className="bg-slate-900 w-[6.4cm] h-[8.9cm] rounded-[3.55mm] p-[5mm]">
        <div className="rounded-[3.6mm] h-full flex items-center justify-center text-9xl bg-slate-800 font-bold text-slate-300">
          あ
        </div>
      </div>
      <div className="w-full flex justify-center gap-16">
        <button className="border-2 border-red-900 rounded-full w-[110px] h-[110px] flex justify-center items-center">
          <Cross size="sm" /> 
        </button>
        <button className="border-2 border-green-900 rounded-full w-[110px] h-[110px] flex justify-center items-center">
          <Circle size="sm" /> 
        </button>
      </div>
    </div>
  );

  // return <Main />;
};

export default App;
