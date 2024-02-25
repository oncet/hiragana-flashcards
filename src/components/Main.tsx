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

const shuffledSyllables = shuffle(syllables);

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
    <div className="flex min-h-svh items-center justify-center gap-6">
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
  );
};

export { Main };
