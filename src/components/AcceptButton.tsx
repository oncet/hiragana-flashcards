import { motion } from "framer-motion";

import Circle from "./Circle";

type AcceptButtonProps = {
  className?: string;
  count: number;
  onClick: () => void;
};

const AcceptButton = ({ className, count, onClick }: AcceptButtonProps) => {
  return (
    <div className="relative">
      <button
        className={
          "flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-green-900 transition-opacity duration-300 " +
          className
        }
        onClick={onClick}
      >
        <Circle size="sm" />
      </button>
      <motion.div
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-900/50 bg-slate-950 text-lg font-semibold text-green-400/95 [font-variant-numeric:tabular-nums]"
      >
        {count}
      </motion.div>
    </div>
  );
};

export default AcceptButton;
