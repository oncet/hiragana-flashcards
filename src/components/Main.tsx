import { useState } from "react";
import syllables from "../syllables";
import Circle from "./Circle";
import Cross from "./Cross";
import { Flashcard } from "./Flashcard";
import MobileButton from "./MobileButton";

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
    <div className="mx-auto flex h-svh max-w-screen-sm flex-col items-center justify-between gap-4 p-12">
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
      <div className="flex w-full justify-between gap-4">
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
  );
};

export { Main };
