import React from 'react'
import dices from '../assets/dice/dices.png'

function Landingpage({newtoggle}) {
  return (
    <>
    <div className=' w-full h-screen'>
        <div className='w-[1182px] h-[522px] mt-16  m-auto flex items-center'>
            <img src={dices} alt="dice image" />
            <div>
                <h1 className=' text-[96px]'>DICE GAME</h1>
                <button onClick={
                    newtoggle
                } className='bg-black hover:bg-white hover:border hover:text-black border-black text-white w-[220px] h-[44px] rounded-lg text-[16]'>Play Now</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Landingpage