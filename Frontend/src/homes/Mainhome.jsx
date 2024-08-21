import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import { DndContext, closestCorners } from '@dnd-kit/core'
import Navbar from '../components/Navbar';
import Publish from '../components/Publish';

function Mainhome() {
  const [dropped, setDropped] = useState([]);

  const handledrop = (event) => {
    const {active, over} = event;

    if(over && over.id === 'designer-drop-area'){
      const dragged ={
        id: active.id,
        content: getId(active.id),
      };

      setDropped((prev) => [...prev, dragged]);
    }
  };

  const getId = (id) =>{
    switch (id){
      case 'label1': return <label className='border-dashed border-2 w-40 text-center '>Label Box</label>
      case 'input1': return <input type="text" placeholder="Text Field" className="p-1 rounded text-black w-full border-2 border-dashed" />
      case 'checkbox1': return (<div className="flex items-center w-full border-dashed border-2 w-28"><input type="checkbox" className="mr-2 w-full " /><label>Checkbox</label></div>)
      case 'button1': return <button className="bg-blue-500 text-white py-2 px-4 border-dashed border-2 rounded">Button</button>
      default: return null
    }

  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handledrop}>
    <div className='flex flex-col flex-grow'>
        <Navbar/>
      <div className='flex flex-row flex-grow'>
          <Sidebar />
          <Home dropped={dropped} />
        </div>
    </div>
    <Publish dropped={dropped}/>
    </DndContext>
  )
}

export default Mainhome