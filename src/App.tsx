import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "./App.css";

import AcceptButton from "./components/AcceptButton";
import RejectButton from "./components/RejectButton";
import syllables from "./syllables";

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

const randomSyllables = syllables.sort(() => Math.random() - 0.5);

const App = () => {
  const [theme] = useState<"light" | "dark">("dark");

  const [syllableIndex, setSyllableIndex] = useState(0);
  const [currentSyllable, setCurrentSyllable] = useState(randomSyllables[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isReverseVisible, setIsReverseVisible] = useState(false);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [isEndgame, setIsEndgame] = useState(false);

  const isFirstRender = useFirstRender();

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.classList.add("dark:text-white");
      bodyElement.classList.add("dark:bg-slate-950");
      bodyElement.classList.add("border");
      bodyElement.classList.add("border-slate-950");
    }
  }, []);

  useEffect(() => {
    if (!isReverseVisible && !isFirstRender) {
      const nextSyllableIndex =
        syllableIndex < syllables.length - 1 ? syllableIndex + 1 : 0;

      setCurrentSyllable(syllables[nextSyllableIndex]);
      setSyllableIndex(nextSyllableIndex);

      if (isEndgame) {
        setIsEndgame(false);
      }

      if (syllableIndex === syllables.length - 1) {
        setIsEndgame(true);
      }
    } else {
      if (isEndgame) {
        setRejectedCount(0);
        setAcceptedCount(0);
      }
    }
  }, [isReverseVisible]);

  return (
    <div className="flex h-svh flex-col items-center justify-center gap-16">
      <motion.button
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onUpdate={(latest) => {
          if (latest.rotateY > "90") {
            setIsReverseVisible(true);
          } else {
            setIsReverseVisible(false);
          }
        }}
        onClick={() => {
          if (!isFlipped) {
            setIsFlipped(true);
          }
        }}
        className={`h-[8.9cm] w-[6.4cm] rounded-[3.55mm] ${
          isReverseVisible ? "bg-slate-900" : "bg-slate-800"
        } p-[5mm]`}
      >
        <div
          className={`relative flex h-full items-center justify-center rounded-[3.6mm] bg-slate-900 text-9xl font-bold uppercase text-slate-300`}
          style={{
            backgroundImage: isReverseVisible
              ? ""
              : `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e293b' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {isReverseVisible ? (
            <div className="[transform:rotateY(180deg)]">
              {currentSyllable.romaji}
            </div>
          ) : isEndgame ? (
            <>
              <div>🎉</div>
              <div className="absolute bottom-0 flex items-center gap-2 px-6 py-4 text-base font-light lowercase tracking-wider text-slate-400/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z"
                    clipRule="evenodd"
                  />
                </svg>
                Tap to restart
              </div>
            </>
          ) : (
            currentSyllable.kana
          )}
        </div>
      </motion.button>
      <div
        className={
          "flex w-full justify-center gap-16 transition-opacity duration-300 "
        }
      >
        <RejectButton
          className={isFlipped ? "opacity-100" : "opacity-30"}
          count={rejectedCount}
          onClick={() => {
            if (isFlipped) {
              setRejectedCount(rejectedCount + 1);
              setIsFlipped(false);
            }
          }}
        />
        <AcceptButton
          className={isFlipped ? "opacity-100" : "opacity-30"}
          count={acceptedCount}
          onClick={() => {
            if (isFlipped) {
              setAcceptedCount(acceptedCount + 1);
              setIsFlipped(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;
