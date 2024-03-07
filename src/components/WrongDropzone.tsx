import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";
import Cross from "./Cross";

type WrongDropzoneProps = {
  className?: string;
  onClick: () => void;
  rejectedSyllables: number[];
  size?: "small" | "large";
};

const WrongDropzone = ({
  className,
  onClick,
  rejectedSyllables,
  size = "small",
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
        "flex flex-col border-4 border-dashed dark:border-red-500 dark:bg-slate-900 dark:text-slate-400",
        className,
      )}
      onClick={onClick}
    >
      <div className="flex basis-[66%] items-end">
        <Cross />
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
