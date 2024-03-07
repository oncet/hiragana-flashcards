const sizes = {
  sm: "h-[50px] w-[50px]",
  md: "h-[100px] w-[100px]",
};

type CircleProps = {
  size?: "sm" | "md";
};

const Circle = ({ size = "md" }: CircleProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} text-green-500`}
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
  );
};

export default Circle;
