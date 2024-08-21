import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

function Home() {
  const [dropped, setDropped] = useState([]); 
  const { isOver, setNodeRef } = useDroppable({
    id: 'designer-drop-area',
  });

  const style = isOver
    ? "border-2 border-blue-500 bg-blue-100"
    : "border-2 border-blue-500";

    
  return (
    <div ref={setNodeRef} className={`${style}  flex flex-col w-full border items-center justify-center m-2`}>
      {dropped.length === 0 && <h3>Drop</h3>}
      {dropped.map((item, index)=> (
        <div key={index}>
          {item.children}
        </div>
      ))}
    </div>
  );
}

export default Home;
