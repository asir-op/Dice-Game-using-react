import React, { useState } from 'react'
import Landingpage from './components/Landingpage'
import Startgame from './components/Startgame';

// import FirstPage from './components/FirstPage'

function App() {

  const[isGameStarted, setIsGameStarted] = useState(false);
  const toggle = () => {
    setIsGameStarted((prev) => !prev)
  };

  return (
    <>
       { isGameStarted ? <Startgame/> : <Landingpage newtoggle = {toggle}/> }
                                                
    </>
  )
}

export default App