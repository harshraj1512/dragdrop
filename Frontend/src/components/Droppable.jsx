import React from "react";
import { useDroppable } from "@dnd-kit/core";

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = isOver
    ? "border-2 border-blue-500 w-80 h-80"
    : "border-2 border-blue-500  w-80 h-80";

  return (
    <div ref={setNodeRef} className={`${style} absolute bottom-0 right-0 m-4`}>
      {props.children}
    </div>
  );
}

export default Droppable;
