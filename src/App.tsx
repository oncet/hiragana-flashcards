import { useEffect, useState } from "react";

import "./App.css";

const syllables = [
  {
    kana: "あ",
    romaji: "a",
  },
  {
    kana: "い",
    romaji: "i",
  },
  {
    kana: "う",
    romaji: "u",
  },
  {
    kana: "え",
    romaji: "e",
  },
  {
    kana: "お",
    romaji: "o",
  },
  {
    kana: "か",
    romaji: "ka",
  },
  {
    kana: "き",
    romaji: "ki",
  },
  {
    kana: "く",
    romaji: "ku",
  },
  {
    kana: "け",
    romaji: "ke",
  },
  {
    kana: "こ",
    romaji: "ko",
  },
  {
    kana: "さ",
    romaji: "sa",
  },
  {
    kana: "し",
    romaji: "shi",
  },
  {
    kana: "す",
    romaji: "su",
  },
  {
    kana: "せ",
    romaji: "se",
  },
  {
    kana: "そ",
    romaji: "so",
  },
  {
    kana: "た",
    romaji: "ta",
  },
  {
    kana: "ち",
    romaji: "chi",
  },
  {
    kana: "つ",
    romaji: "tsu",
  },
  {
    kana: "て",
    romaji: "te",
  },
  {
    kana: "と",
    romaji: "to",
  },
  {
    kana: "な",
    romaji: "na",
  },
  {
    kana: "に",
    romaji: "ni",
  },
  {
    kana: "ぬ",
    romaji: "nu",
  },
  {
    kana: "ね",
    romaji: "ne",
  },
  {
    kana: "の",
    romaji: "no",
  },
  {
    kana: "は",
    romaji: "ha",
  },
  {
    kana: "ひ",
    romaji: "hi",
  },
  {
    kana: "ふ",
    romaji: "fu",
  },
  {
    kana: "へ",
    romaji: "he",
  },
  {
    kana: "ほ",
    romaji: "ho",
  },
  {
    kana: "ま",
    romaji: "ma",
  },
  {
    kana: "み",
    romaji: "mi",
  },
  {
    kana: "む",
    romaji: "mu",
  },
  {
    kana: "め",
    romaji: "me",
  },
  {
    kana: "も",
    romaji: "mo",
  },
  {
    kana: "や",
    romaji: "ya",
  },
  {
    kana: "ゆ",
    romaji: "yu",
  },
  {
    kana: "よ",
    romaji: "yo",
  },
  {
    kana: "ら",
    romaji: "ra",
  },
  {
    kana: "り",
    romaji: "ri",
  },
  {
    kana: "る",
    romaji: "ru",
  },
  {
    kana: "れ",
    romaji: "re",
  },
  {
    kana: "ろ",
    romaji: "ro",
  },
  {
    kana: "わ",
    romaji: "wa",
  },
  {
    kana: "を",
    romaji: "wo",
  },
  {
    kana: "ん",
    romaji: "n",
  },
  {
    kana: "が",
    romaji: "ga",
  },
  {
    kana: "ぎ",
    romaji: "gi",
  },
  {
    kana: "ぐ",
    romaji: "gu",
  },
  {
    kana: "げ",
    romaji: "ge",
  },
  {
    kana: "ご",
    romaji: "go",
  },
  {
    kana: "ざ",
    romaji: "za",
  },
  {
    kana: "じ",
    romaji: "ji",
  },
  {
    kana: "ず",
    romaji: "zu",
  },
  {
    kana: "ぜ",
    romaji: "ze",
  },
  {
    kana: "ぞ",
    romaji: "zo",
  },
  {
    kana: "だ",
    romaji: "da",
  },
  {
    kana: "ぢ",
    romaji: "ji",
  },
  {
    kana: "づ",
    romaji: "zu",
  },
  {
    kana: "で",
    romaji: "de",
  },
  {
    kana: "ど",
    romaji: "do",
  },
  {
    kana: "ば",
    romaji: "ba",
  },
  {
    kana: "び",
    romaji: "bi",
  },
  {
    kana: "ぶ",
    romaji: "bu",
  },
  {
    kana: "べ",
    romaji: "be",
  },
  {
    kana: "ぼ",
    romaji: "bo",
  },
  {
    kana: "ぱ",
    romaji: "pa",
  },
  {
    kana: "ぴ",
    romaji: "pi",
  },
  {
    kana: "ぷ",
    romaji: "pu",
  },
  {
    kana: "ぺ",
    romaji: "pe",
  },
  {
    kana: "ぽ",
    romaji: "po",
  },
];

const rotation = {
  initial: "[transform:rotateY(0)]",
  middle: "[transform:rotateY(90deg)]",
};

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isRomaji, setIsRomaji] = useState(false);
  const [rotate, setRotate] = useState(false);

  const currentSyllable = syllables[currentPosition];

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.classList.add("dark:bg-slate-900");
    }
  }, []);

  return (
    <div className="flex min-h-svh items-center justify-center">
      <button
        className={
          "flex h-96 max-w-72 flex-grow items-center justify-center rounded-xl text-9xl font-bold uppercase transition-transform duration-[3000ms] [backface-visibility:hidden] [perspective:40em] [transform-style:preserve-3d] dark:text-slate-300 " +
          (isRomaji ? "dark:bg-cyan-600 " : "dark:bg-slate-800 ") +
          (rotate ? "[transform:rotateY(90deg)]" : "[transform:rotateY(0)]")
        }
        onClick={() => {
          setRotate(true);
        }}
        onTransitionEnd={() => {
          if (rotate) {
            setIsRomaji(!isRomaji);
            setRotate(false);
          }
        }}
      >
        {isRomaji ? currentSyllable.romaji : currentSyllable.kana}
      </button>
    </div>
  );
};

export default App;
