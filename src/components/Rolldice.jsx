import React, { useState } from 'react'

function Rolldice({currentDice, RollTheDice}) {
    
    

  return (
    <>
    <div className='flex flex-col items-center gap-2 mt-4'>
        <img src={`public/dice/dice_${currentDice}.png`} alt="dice 1" className='cursor-pointer'  onClick={() => RollTheDice()}/>
        <p className='text-2xl '>Click on Dice to Roll</p>
        
    </div>
    </>
  )
}

export default Rolldice