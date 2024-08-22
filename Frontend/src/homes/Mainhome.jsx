import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import { DndContext, closestCorners } from '@dnd-kit/core'
import Navbar from '../components/Navbar';
import Publish from '../components/Publish';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Mainhome() {
  const [dropped, setDropped] = useState([]);
  const navigate = useNavigate();

  const handledrop = (event) => {
    const {active, over} = event;

    if(over && over.id === 'designer-drop-area'){
      const dragged ={
        id: Date.now(),
        type: active.id,
        content: getId(active.id),
      };

      setDropped((prev) => [...prev, dragged]);
    }
  };

  const getId = (id) =>{
    switch (id){
      case 'label1': return { className: 'border-dashed border-2 w-32 text-center', children: 'Label Box' };
      case 'input1': return { type: 'text', placeholder: 'Text Field', className: 'p-1 rounded text-black w-32 border-2 border-dashed' };
      case 'checkbox1': return { className: 'flex items-center w-full border-dashed border-2 w-32', children: 'Checkbox' };
      case 'button1': return { className: 'bg-blue-500 text-white py-2 px-4 border-dashed border-2 rounded', children: 'Button' };
      default: return null
    }

  }

  const saveLayout = async () => {
    try {
      
      const response = await axios.post('http://localhost:3000/api/single', { droppedItems: dropped });
      if (response.status === 201) {
        alert('Layout saved successfully!');
      } else {
        alert('Failed to save layout.');
      }
    } catch (error) {
      console.error('Error saving layout:', error);
      alert('Error saving layout. Please try again.');
    }
  };

  const handlepublish = () => {
    navigate('/publish', {state: {dropped}})
  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handledrop}>
    <div className='flex flex-col flex-grow'>
        <Navbar saveLayout={saveLayout} handlepublish={handlepublish} />
      <div className='flex flex-row flex-grow'>
          <Sidebar />
          <Home dropped={dropped} setDropped={setDropped}/>
        </div>
    </div>
    </DndContext>
  )
}

export default Mainhome