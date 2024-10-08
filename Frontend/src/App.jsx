import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core"
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mainhome from "./homes/Mainhome";
import LayoutPage from "./components/LayoutPage";
import Publish from "./components/Publish";



// function App() {
//   const containers = ['A', 'B', 'C'];
//   const [parent, setParent] = useState({
//     draggable1: null, 
//     draggable2: null, 
//   });
//   // const draggableMarkup = (
//   //   <Draggable id="draggable">Drag me</Draggable>
//   // );

//   function handleDragEnd(event) {
//     const { over, active } = event;

    
//     setParent((prev) => ({
//       ...prev,
//       [active.id]: over ? over.id : null,
//     }));
//   }
//   return (
//     <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
//       <div className="space-x-4">
//       {parent.draggable1 === null && (
//         <Draggable id="draggable1">Drag me</Draggable>
//       )}
//       {parent.draggable2 === null && (
//         <Draggable id="draggable2">Here</Draggable>
//       )}
//       </div>
//       {containers.map((id) => (
//         // We updated the Droppable component so it would accept an `id`
//         // prop and pass it to `useDroppable`
//         <Droppable key={id} id={id}>
//           {parent.draggable1 === id && (
//             <Draggable id="draggable1">Drag me</Draggable>
//           )}
//           {parent.draggable2 === id && (
//             <Draggable id="draggable2">Here</Draggable>
//           )}
//           {parent.draggable1 !== id &&
//             parent.draggable2 !== id &&
//             "Drop here"}
//         </Droppable>
//       ))}
//     </DndContext>
//   );
 
// }

// export default App


function App() {
  
  return (
    <>
    <div className="flex flex-col min-h-screen min-w-full max-h-screen">
    <Routes>
      <Route path="/" element={<Mainhome/>}/>
      <Route path="/layout" element={<LayoutPage/>}/>
      <Route path="/publish" element={<Publish/>}/>
    </Routes>
    </div>
    </>
  );
 
}

export default App