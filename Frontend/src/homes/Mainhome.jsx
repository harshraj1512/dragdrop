import React from 'react'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'

function Mainhome() {
  return (
    <div className='flex flex-row flex-grow'>
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Mainhome