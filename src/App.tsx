import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }
  }, []);

  return (
    <div className="dark flex min-h-svh items-center justify-center dark:bg-slate-600">
      <div className="flex h-96 max-w-72 flex-grow items-center justify-center text-9xl font-bold dark:bg-slate-800">
        <div>あ</div>
      </div>
    </div>
  );
};

export default App;
