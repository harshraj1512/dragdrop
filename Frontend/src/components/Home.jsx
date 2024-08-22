import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Home({ dropped }) { 
  console.log('Dropped items:', dropped);

  const { isOver, setNodeRef } = useDroppable({
    id: 'designer-drop-area',
  });

  const renderComponent = (item) => {
    if (!item || !item.type || !item.content) {
      return null; 
    }

    const { type, content } = item;

    switch (type) {
      case 'label1':
        return (
          <label className={content.className}>
            {content.children || 'Default Label'}
          </label>
        );
      case 'input1':
        return (
          <input
            type={content.type || 'text'} 
            placeholder={content.placeholder || ''}
            className={content.className || ''}
          />
        );
      case 'checkbox1':
        return (
          <div className={content.className || ''}>
            <input type="checkbox" className="mr-2" />
            <label>{content.children || 'Default Checkbox Label'}</label>
          </div>
        );
      case 'button1':
        return (
          <button className={content.className || 'default-button-class'}>
            {content.children || 'Default Button'}
          </button>
        );
      default:
        return null;
    }
  };

  const style = isOver
    ? "border-2 border-blue-500 bg-blue-100"
    : "border-2 border-blue-500";

  return (
    <div
      ref={setNodeRef}
      id="designer-drop-area"
      className={`p-4 flex-grow items-center justify-center ${style}`}
    >
      {dropped && dropped.length > 0 ? (
        dropped.map((item, index) => (
          <div key={index} className="mb-4 ">
            {renderComponent(item)}
          </div>
        ))
      ) : (
        <div>No items dropped</div>
      )}
    </div>
  );
}

export default Home;
