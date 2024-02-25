import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

type RightDropzoneProps = {
  className?: string;
  onClick: () => void;
  acceptedSyllables: number[];
};

const RightDropzone = ({
  className,
  onClick,
  acceptedSyllables,
}: RightDropzoneProps) => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    if (acceptedSyllables.length < 1) {
      return;
    }

    setIsLarge(true);

    const timeout = setTimeout(() => {
      setIsLarge(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [acceptedSyllables]);

  return (
    <Card
      className={twMerge(
        "flex flex-col border-4 border-dashed dark:border-green-500 dark:bg-slate-900 dark:text-slate-400",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex basis-[66%] items-end">
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
      </div>
      <div
        className={`flex basis-[33%] items-center text-5xl font-thin transition dark:text-green-400 ${
          isLarge ? "scale-125" : "scale-100"
        }`}
      >
        {acceptedSyllables.length}
      </div>
    </Card>
  );
};

export { RightDropzone };
