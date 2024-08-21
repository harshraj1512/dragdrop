import React from 'react'
import { useDraggable } from '@dnd-kit/core'

function Draggable(prop) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: prop.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

  return (
    <div className="cursor-pointer select-none mb-2" ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {prop.children}
    </div>
  );
}

export default Draggable