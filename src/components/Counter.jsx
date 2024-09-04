import { useState } from 'react';

export function Counter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
  
    return (
      <div
      className={`${className} flex flex-col justify-center items-center`}   onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1 className='font-sans font-bold text-3xl text-center'>{score}</h1>
        <button className='bg-slate-50 p-2 rounded-lg  m-8' onClick={() => setScore(score + 1)}>
          Add one
        </button>
      </div>
    );
  }