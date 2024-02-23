import { useState } from "react";
import syllables from "../syllables";
import { Flashcard } from "./Flashcard";
import { RightDropzone } from "./RightDropzone";
import { WrongDropzone } from "./WrongDropzone";

const Main = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [rejectedSyllables, setRejectedSyllables] = useState<number[]>([]);
  const [approvedSyllables, setApprovedSyllables] = useState<number[]>([]);

  const currentSyllable = syllables[currentPosition];

  return (
    <div className="flex min-h-svh items-center justify-center gap-6">
      <WrongDropzone
        className="hidden md:flex"
        onClick={() => {
          setRejectedSyllables([...rejectedSyllables, currentPosition]);
        }}
        rejectedSyllables={rejectedSyllables}
      />
      <Flashcard
        currentSyllable={currentSyllable}
        isRejected={rejectedSyllables.includes(currentPosition)}
      />
      <RightDropzone
        className="hidden md:flex"
        onClick={() => {
          setApprovedSyllables([...approvedSyllables, currentPosition]);
        }}
      />
    </div>
  );
};

export { Main };
