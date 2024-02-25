import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

type WrongDropzoneProps = {
  className?: string;
  onClick: () => void;
  rejectedSyllables: number[];
};

const WrongDropzone = ({
  className,
  onClick,
  rejectedSyllables,
}: WrongDropzoneProps) => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    if (rejectedSyllables.length < 1) {
      return;
    }

    setIsLarge(true);

    const timeout = setTimeout(() => {
      setIsLarge(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [rejectedSyllables]);

  return (
    <Card
      className={twMerge(
        "dark:text-slate-399 flex flex-col border-4 border-dashed dark:border-red-500 dark:bg-slate-900",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex basis-[66%] items-end">
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
            strokeLinecap="round"
          />
          <line
            x1="10"
            y1="90"
            x2="90"
            y2="10"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        className={`flex basis-[33%] items-center text-5xl font-thin transition [font-variant-numeric:tabular-nums] dark:text-red-400 ${
          isLarge ? "scale-125" : "scale-100"
        }`}
      >
        {rejectedSyllables.length}
      </div>
    </Card>
  );
};

export { WrongDropzone };
