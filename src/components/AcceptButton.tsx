import { useState } from "react";

import Circle from "./Circle";

const AcceptButton = () => {
  const [count, setCount] = useState(4);

  return (
    <div className="relative">
      <button
        className="flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-green-900"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <Circle size="sm" />
      </button>
      <div className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-green-900 bg-slate-950 text-xl text-green-400 [font-variant-numeric:tabular-nums]">
        {count}
      </div>
    </div>
  );
};

export default AcceptButton;
