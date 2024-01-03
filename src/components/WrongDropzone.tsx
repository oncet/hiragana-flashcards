import { twMerge } from "tailwind-merge";
import { Card } from "./Card";

type WrongDropzoneProps = {
  className?: string;
  onClick: () => void;
};

const WrongDropzone = ({ className, onClick }: WrongDropzoneProps) => {
  return (
    <Card
      className={twMerge(
        "border-4 border-dashed dark:border-red-500 dark:bg-slate-900 dark:text-slate-400",
        className,
      )}
      onClick={onClick}
    >
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
          stroke-linecap="round"
        />
        <line
          x1="10"
          y1="90"
          x2="90"
          y2="10"
          stroke="currentColor"
          strokeWidth="8"
          stroke-linecap="round"
        />
      </svg>
    </Card>
  );
};

export { WrongDropzone };
