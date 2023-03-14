import React, { useState } from 'react';

const SortTasks = ({ handleSortBy }) => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    handleSortBy(buttonName);
  };

  return (
    <div className='flex pb-4'>
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded-l ${
          activeButton === 'All' ? 'bg-[#2f2d2d]' : ''
        }`}
        onClick={() => handleButtonClick('All')}
      >
        All
      </button>
      <button
        className={`bg-black text-white font-bold py-2 px-4 ${
          activeButton === 'Completed' ? 'bg-[#2f2d2d]' : ''
        }`}
        onClick={() => handleButtonClick('Completed')}
      >
        Completed
      </button>
      <button
        className={`bg-black text-white font-bold py-2 px-4 rounded-r ${
          activeButton === 'Not completed' ? 'bg-[#2f2d2d]' : ''
        }`}
        onClick={() => handleButtonClick('Not completed')}
      >
        Not completed
      </button>
    </div>
  );
};

export default SortTasks;
