import React from 'react'
import Publish from './Publish';
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  console.log(props);
  const navigate = useNavigate();
  

  const handlelayoutpage = () =>{
    navigate('/layout');
  };
  
  return (
    <>
    <div className="min-w-fit container ">
      <div className="navbar bg-[#27272F] rounded-xl ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Design</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search Project"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <button onClick={props.saveLayout} className="btn btn-ghost border-solid border-2 border-sky-500">
            <div className="indicator gap-2 items-center">
              
              <a>Save Layout</a>
            </div>
          </button>
          <button onClick={handlelayoutpage} className="btn btn-ghost border-solid border-2 border-sky-500">
            <div className="indicator gap-2 items-center">
              <a>Load layout</a>
            </div>
          </button>
          <button onClick={props.handlepublish} className="btn btn-ghost border-solid border-2 border-sky-500">
            <div className="indicator gap-2 items-center">
              <a>publish</a>
            </div>
          </button>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Navbar