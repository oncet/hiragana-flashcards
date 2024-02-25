import { useEffect, useState } from "react";
import { Card } from "./Card";

type FlashcardProps = {
  currentSyllable: {
    kana: string;
    romaji: string;
  };
  isLast: boolean;
  isRejected: boolean;
  onFlip: (isRomaji: boolean) => void;
};

const Flashcard = ({
  currentSyllable,
  isLast,
  isRejected,
  onFlip,
}: FlashcardProps) => {
  const [isRomaji, setIsRomaji] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selected, setSelected] =
    useState<FlashcardProps["currentSyllable"]>(currentSyllable);

  useEffect(() => {
    if (isRomaji || isLast) {
      setIsRotated(true);
    }
  }, [currentSyllable, isLast]);

  return (
    <Card
      className={
        "font-bold uppercase transition-transform duration-[150ms] " +
        (isRomaji
          ? "dark:bg-green-400 dark:text-slate-900 "
          : "dark:bg-slate-800 ") +
        (isRotated
          ? "ease-in [transform:rotateY(90deg)] "
          : "ease-out [transform:rotateY(0)] ")
      }
      onClick={() => {
        if (!isRomaji && !isLast) {
          setIsRotated(true);
        }
      }}
      onTransitionEnd={() => {
        if (isRotated) {
          setIsRomaji(!isRomaji);
          setIsRotated(false);
          setSelected(currentSyllable);

          return;
        }

        onFlip(isRomaji);
      }}
    >
      {isRomaji ? selected.romaji : isLast ? "🎉" : selected.kana}
    </Card>
  );
};

export { Flashcard };
