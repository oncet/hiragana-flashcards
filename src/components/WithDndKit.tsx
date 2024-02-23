import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const WithDndKit = () => {
  const [parent, setParent] = useState(null);

  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col gap-5">
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
      </div>
    </DndContext>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
};

export default WithDndKit;
