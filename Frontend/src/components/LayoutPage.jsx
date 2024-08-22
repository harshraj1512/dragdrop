import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LayoutPage() {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/single');
        setLayout(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching layout:', error);
      }
    };

    fetch();
  }, []);

  const Component = (item) => {
    if (!item || !item.type) {
      return null;
    }

    const { type, content } = item;

    switch (type) {
      case 'label1':
        return <label className={content.className}>{content.children}</label>;
      case 'input1':
        return <input type={content.type} placeholder={content.placeholder} className={content.className} />;
      case 'checkbox1':
        return (
          <div className={content.className}>
            <input type="checkbox" className="mr-2" />
            <label>{content.children}</label>
          </div>
        );
      case 'button1':
        return <button className={content.className}>{content.children}</button>;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen border'>
      <div className='text-center p-4'>Layout</div>
      <div className='p-4'>
        {layout.map((item, index) => (
          <div key={index} className='mb-4'>
            {Component(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutPage;
