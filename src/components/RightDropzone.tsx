import { Card } from "./Card";

type RightDropzoneProps = {
  onClick: () => void;
};

const RightDropzone = ({ onClick }: RightDropzoneProps) => {
  return (
    <Card
      className="border-4 border-dashed dark:border-green-500 dark:bg-slate-900 dark:text-slate-400"
      onClick={onClick}
    >
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
    </Card>
  );
};

export { RightDropzone };
