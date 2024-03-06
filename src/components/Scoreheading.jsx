import React, { useState } from 'react'
// import Rolldice from './Rolldice';

function Scoreheading({value, setValue, score, error, setError}) {
    const arr = [1,2,3,4,5,6]

    const valueHandler = (e) => {
      setValue(e);
      setError("");
    }
    
  return (
    <>
    <div className='w-[80vw] h-[150px]  mt-12 m-auto flex justify-between items-center' >
        <div className='w-[62] h-[112] '>
            <h1 className='text-8xl ml-6' >{score}</h1>
            <p className='text-2xl'>total score</p>
            </div>
            <div className='flex flex-col gap-6 items-end'>
              <p className='text-red'>{error}</p>
            <div className='flex gap-6 items-end'>
            {arr.map((e, i) => (
                <button
                key={i}
                className={`h-16 w-16 border ${value === e ? 'bg-black text-white' : 'bg-white'} border-black`}
                onClick={() => valueHandler(e)}
                >
                {e}
                </button>
            ))}
            </div>
            <p className='text-2xl'>select number</p>
        </div>
    </div>
    
    </>

  )
}

export default Scoreheading