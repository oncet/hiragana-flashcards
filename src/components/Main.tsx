import { useState } from "react";
import syllables from "../syllables";
import { Flashcard } from "./Flashcard";
import { RightDropzone } from "./RightDropzone";
import { WrongDropzone } from "./WrongDropzone";

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(syllables);

const Main = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [rejectedSyllables, setRejectedSyllables] = useState<number[]>([]);
  const [approvedSyllables, setApprovedSyllables] = useState<number[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);

  const isLast = currentPosition >= syllables.length;

  const currentSyllable = isLast
    ? syllables[syllables.length - 1]
    : syllables[currentPosition];

  return (
    <div className="flex h-svh flex-col justify-center">
      <div className="mx-auto flex basis-[33%] items-center justify-between md:hidden">
        <div className="flex flex-col items-center px-8 py-4">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[50px] w-[50px] text-red-500"
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
          <div
            className={`flex items-center text-5xl font-thin transition [font-variant-numeric:tabular-nums] dark:text-red-400`}
          >
            0
          </div>
        </div>
        <div className="flex flex-col items-center px-8 py-4">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[50px] w-[50px] text-green-500"
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
          <div
            className={`flex items-center text-5xl font-thin transition [font-variant-numeric:tabular-nums] dark:text-green-400`}
          >
            0
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center gap-6 md:items-center">
        <WrongDropzone
          className="hidden md:flex"
          onClick={() => {
            if (!isWaiting || isLast) return;

            setRejectedSyllables([...rejectedSyllables, currentPosition]);
            setCurrentPosition(currentPosition + 1);
          }}
          rejectedSyllables={rejectedSyllables}
        />
        <Flashcard
          currentSyllable={currentSyllable}
          isRejected={rejectedSyllables.includes(currentPosition)}
          onFlip={(isRomaji) => {
            if (isRomaji) {
              setIsWaiting(true);

              return;
            }

            setIsWaiting(false);
          }}
          isLast={isLast}
        />
        <RightDropzone
          className="hidden md:flex"
          onClick={() => {
            if (!isWaiting || isLast) return;

            setApprovedSyllables([...approvedSyllables, currentPosition]);
            setCurrentPosition(currentPosition + 1);
          }}
          acceptedSyllables={approvedSyllables}
        />
      </div>
      <div className="basis-[33%] md:hidden" />
    </div>
  );
};

export { Main };
