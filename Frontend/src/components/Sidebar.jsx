import React from 'react';
import Draggable from './Draggable';

function Sidebar() {
  return (
    <div className="w-64 text-white py-4 px-4 rounded flex flex-col space-y-4 items-center mt-6">
      <Draggable id="label1">
        <label className='border-dashed border-2 w-40 text-center '>Label Box</label>
      </Draggable>
      <Draggable id="input1">
        <input type="text" placeholder="Text Field" className="p-1 rounded text-black w-full border-2 border-dashed" />
      </Draggable>
      <Draggable id="checkbox1">
        <div className="flex items-center w-full border-dashed border-2 w-28">
          <input type="checkbox" className="mr-2 w-full " />
          <label>Checkbox</label>
        </div>
      </Draggable>
      <Draggable id="button1">
        <button className="bg-blue-500 text-white py-2 px-4 border-dashed border-2 rounded">Button</button>
      </Draggable>
    </div>
  );
}

export default Sidebar;
