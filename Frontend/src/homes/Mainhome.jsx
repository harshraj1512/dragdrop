import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'
import { DndContext, closestCorners } from '@dnd-kit/core'

function Mainhome() {
  return (
    <DndContext collisionDetection={closestCorners}>
    <div className='flex flex-row flex-grow '>
        <Sidebar/>
        <Home/>
    </div>
    </DndContext>
  )
}

export default Mainhome