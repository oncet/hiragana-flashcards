const Cross = () => {
  return (
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
  );
};

export default Cross;
