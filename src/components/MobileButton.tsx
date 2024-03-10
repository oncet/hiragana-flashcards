const borderColors = {
  error: "border-red-900",
  success: "border-green-900",
};

const textColors = {
  error: "dark:bg-red-500",
  success: "dark:bg-green-500",
};

type MobileButtonProps = {
  color: "error" | "success";
  count: number;
  image: React.ReactNode;
  onClick: () => void;
};

const MobileButton = ({ color, count, image, onClick }: MobileButtonProps) => {
  return (
    <div className="relative" onClick={onClick}>
      <div className={`rounded-full border-2 ${borderColors[color]} p-7`}>
        {image}
      </div>
      {!!count && (
        <div
          className={`absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full ${borderColors[color]} text-xl transition [font-variant-numeric:tabular-nums] ${textColors[color]} text-slate-800`}
        >
          {count}
        </div>
      )}
    </div>
  );
};

export default MobileButton;
