import { useEffect, useState } from "react";
import { Card } from "./Card";

type FlashcardProps = {
  currentSyllable: {
    kana: string;
    romaji: string;
  };
  isRejected: boolean;
};

const Flashcard = ({ currentSyllable, isRejected }: FlashcardProps) => {
  const [isRomaji, setIsRomaji] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [selected, setSelected] =
    useState<FlashcardProps["currentSyllable"]>(currentSyllable);

  useEffect(() => {
    if (isRomaji) {
      setIsRotated(true);
    }
  }, [currentSyllable]);

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
        setIsRotated(true);
      }}
      onTransitionEnd={() => {
        if (isRotated) {
          setIsRomaji(!isRomaji);
          setIsRotated(false);
          setSelected(currentSyllable);
        }
      }}
    >
      {isRomaji ? selected.romaji : selected.kana}
    </Card>
  );
};

export { Flashcard };
