import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Circle from "./Circle";

const AcceptButton = () => {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      window.setTimeout(() => {
        setAnimate(false);
      }, 200);
    }
  }, [animate]);

  return (
    <div className="relative">
      <button
        className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-green-900"
        onClick={() => {
          setCount(count + 1);
          setAnimate(true);
        }}
      >
        <Circle size="sm" />
      </button>
      <motion.div
        animate={{ scale: animate ? 1.3 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-green-900 bg-slate-950 text-xl text-green-400 [font-variant-numeric:tabular-nums]"
      >
        {count}
      </motion.div>
    </div>
  );
};

export default AcceptButton;
