import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Home() {
  const { isOver, setNodeRef } = useDroppable({
    id: 'designer-drop-area',
  });

  const style = isOver
    ? "border-2 border-blue-500 w-80 bg-blue-100"
    : "border-2 border-blue-500 w-80";

  return (
    <div ref={setNodeRef} className={`${style}  flex w-full border items-center justify-center m-2`}>
      
      Drop
    </div>
  );
}

export default Home;
