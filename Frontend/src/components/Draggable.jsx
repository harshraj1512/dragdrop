import React from 'react'
import { useDraggable } from '@dnd-kit/core'

function Draggable({ id, children }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

  return (
    <button className="cursor-pointer select-none mb-2" ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
    </button>
  );
}

export default Draggable