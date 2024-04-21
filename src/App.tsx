import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./App.css";
import Circle from "./components/Circle";
import Cross from "./components/Cross";
import AcceptButton from "./components/AcceptButton";

const App = () => {
  const [theme] = useState<"light" | "dark">("dark");
  const [isFlipped, setIsFlipper] = useState(false);
  const [isReverseVisible, setIsReverseVisible] = useState(false);

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
    <div className="flex h-svh flex-col items-center justify-center gap-16">
      <motion.button
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onUpdate={(latest) => {
          if (latest.rotateY > "90") {
            setIsReverseVisible(true);
          } else {
            setIsReverseVisible(false);
          }
        }}
        onClick={() => {
          setIsFlipper(!isFlipped);
        }}
        className="h-[8.9cm] w-[6.4cm] rounded-[3.55mm] bg-slate-900 p-[5mm]"
      >
        <div className="flex h-full items-center justify-center rounded-[3.6mm] bg-slate-800 text-9xl font-bold text-slate-300">
          {isReverseVisible ? (
            <div className="[transform:rotateY(180deg)]">A</div>
          ) : (
            "あ"
          )}
        </div>
      </motion.button>
      <div className="flex w-full justify-center gap-16">
        <button className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-red-900">
          <Cross size="sm" />
        </button>
        {/* <button className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-green-900">
          <Circle size="sm" />
        </button> */}
        <AcceptButton />
      </div>
    </div>
  );

  // return <Main />;
};

export default App;
