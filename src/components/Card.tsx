import { twMerge } from "tailwind-merge";

type CardProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Card = ({ children, className, ...props }: CardProps) => (
  <button
    className={twMerge(
      "flex h-80 w-56 flex-shrink-0 items-center justify-center rounded-xl text-9xl dark:bg-slate-800 dark:text-slate-300",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
