import React from 'react'
import Sidebar from './Sidebar'
import { useDroppable } from '@dnd-kit/core'

function Home() {
    const droppable = useDroppable({
        id: 'designer-drop-area'
    })
  return (
    <>
    <div className='flex w-full border items-center justify-center relative overflow-y-auto'>
        home
    </div>
    </>
    
  )
}

export default Home