import { useRef } from "react";

import { useDraggable } from "@neodrag/react";

const WithNeoDrag = () => {
  const draggableRef = useRef(null);

  useDraggable(draggableRef);

  return (
    <div className="border p-10">
      <div className="bg-yellow-800 p-2" ref={draggableRef}>
        Draggable
      </div>
    </div>
  );
};

export default WithNeoDrag;
