import { useState } from "react";
import syllables from "../syllables";
import Circle from "./Circle";
import Cross from "./Cross";
import { Flashcard } from "./Flashcard";
import MobileButton from "./MobileButton";
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
      <div className="flex basis-[33%] items-center justify-center">
        {isLast && (
          <button type="button" className="rounded-full bg-slate-700 p-8">
            <ShuffleIcon />
          </button>
        )}
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
      <div className="flex w-full basis-[33%] px-12">
        <div className="flex w-full items-center justify-between md:hidden">
          <MobileButton
            color="error"
            count={rejectedSyllables.length}
            image={<Cross size="sm" />}
            onClick={() => {
              if (!isWaiting || isLast) return;

              setRejectedSyllables([...rejectedSyllables, currentPosition]);
              setCurrentPosition(currentPosition + 1);
            }}
          />
          <MobileButton
            color="success"
            count={approvedSyllables.length}
            image={<Circle size="sm" />}
            onClick={() => {
              if (!isWaiting || isLast) return;

              setApprovedSyllables([...approvedSyllables, currentPosition]);
              setCurrentPosition(currentPosition + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { Main };
