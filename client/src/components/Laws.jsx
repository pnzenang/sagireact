import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Laws = ({ title, detail }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header className='bg-red-500 my-5'>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <div className='w-full p-2'>{detail}</div>}
    </article>
  );
};

export default Laws;
