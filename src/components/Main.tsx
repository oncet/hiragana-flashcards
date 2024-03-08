import { useState } from "react";
import syllables from "../syllables";
import Circle from "./Circle";
import Cross from "./Cross";
import { Flashcard } from "./Flashcard";
import { RightDropzone } from "./RightDropzone";
import ShuffleIcon from "./ShuffleIcon";
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
      <div className="mx-auto flex basis-[33%]">
        <div className="flex items-center md:hidden">
          <div
            className="flex flex-col items-center gap-4 px-8 py-4"
            onClick={() => {
              if (!isWaiting || isLast) return;

              setRejectedSyllables([...rejectedSyllables, currentPosition]);
              setCurrentPosition(currentPosition + 1);
            }}
          >
            <Cross size="sm" />
            <div
              className={`flex items-center text-4xl transition [font-variant-numeric:tabular-nums] dark:text-red-400`}
            >
              {rejectedSyllables.length}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-4 px-8 py-4"
            onClick={() => {
              if (!isWaiting || isLast) return;

              setApprovedSyllables([...approvedSyllables, currentPosition]);
              setCurrentPosition(currentPosition + 1);
            }}
          >
            <Circle size="sm" />
            <div
              className={`flex items-center text-4xl transition [font-variant-numeric:tabular-nums] dark:text-green-400`}
            >
              {approvedSyllables.length}
            </div>
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
      <div className="flex basis-[33%] items-center justify-center">
        <button type="button" className="rounded-full bg-slate-700 p-8">
          <ShuffleIcon />
        </button>
      </div>
    </div>
  );
};

export { Main };
