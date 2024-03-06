import React from 'react'
import Rolldice from './Rolldice';
import Scoreheading from './Scoreheading'
import { useState } from 'react';
// import Rules from './Rules';
import Rules1 from './Rules1';

function Startgame() {
  const [value, setValue] = useState();
  const [currentDice, setCurrentDice] = useState(1); 
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showrules, setShowrules] = useState(false);


  var randomNum = (min, max) => {
      return (Math.floor(Math.random() * (max - min) + min)); 
  }
  
  const resetScore = () => {
    setScore(0);
  }

    var RollTheDice = () => {
        if(!value) {
          setError("You have not selected any number");
          return;
        }
       const newRandNum = randomNum(1,7);
       setCurrentDice((prev) => newRandNum);
      if(value == newRandNum){
         setScore((prev) => prev + newRandNum)
        }
      else{
        setScore((prev) => prev-2 )
      }
      setValue(undefined);
    }

  return (
    <>
    <Scoreheading value = {value} setValue = {setValue} score ={score} error = {error} setError = {setError}/>
    <Rolldice currentDice = {currentDice} RollTheDice = {RollTheDice}/>
      <div className='flex flex-col items-center gap-4 mt-3'>
        <button className='w-[15rem] h-8 border border-black hover:bg-black hover:text-white' onClick={resetScore}>Reset Score</button>
        
        <button className='bg-black text-white w-[15rem] h-8 border border-black hover:bg-white hover:text-black' onClick={ () => setShowrules(prev => !prev)}>{showrules? "Hide": "Show Rules"}</button>

        </div>
        {showrules && <Rules1/>}

    </>
  )
}

export default Startgame