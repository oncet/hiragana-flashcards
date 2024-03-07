const sizes = {
  sm: "h-[50px] w-[50px]",
  md: "h-[100px] w-[100px]",
};

type CrossProps = {
  size?: "sm" | "md";
};

const Cross = ({ size = "md" }: CrossProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} text-red-500`}
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
  );
};

export default Cross;
