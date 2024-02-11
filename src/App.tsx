import { useEffect, useState } from "react";

import { DndContext } from "@dnd-kit/core";
import "./App.css";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const [parent, setParent] = useState(null);

  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;
  const draggable2 = <Draggable id="draggable2">Go ahead, drag me.</Draggable>;

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.classList.add(theme);
    }

    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.classList.add("dark:text-white");
      bodyElement.classList.add("dark:bg-slate-900");
    }
  }, []);

  return (
    <div className="border p-10">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col gap-5">
          {!parent ? draggable : null}
          <Droppable id="droppable">
            {parent === "droppable" ? draggable : "Drop here"}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
};

export default App;
