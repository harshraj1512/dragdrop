import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';

function Home(props) {
 
  const { isOver, setNodeRef } = useDroppable({
    id: 'designer-drop-area',
  });

  const style = isOver
    ? "border-2 border-blue-500 bg-blue-100"
    : "border-2 border-blue-500";


  return (
    <div ref={setNodeRef} className={`${style}  flex flex-wrap gap-4 w-full border items-center justify-center m-2`}>
      {props.dropped.length === 0 && <h3>Drop</h3>}
      {props.dropped.map((item, index)=> (
        <div className='m-2' key={index}>
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default Home;
