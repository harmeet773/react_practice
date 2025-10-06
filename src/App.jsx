import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card  from './components/Card.jsx'
import Counter from './miniApps/counter.jsx'
import CounterUsingStore from './miniApps/CounterUsingStore.jsx'
import DisplayAdditionOfNumbers from './miniApps/DisplayAdditionOfNumbers.jsx'


function App() { 
  

  return ( 
    <>    
    <div  className="container" >
      <DisplayAdditionOfNumbers />
      <Card />
      <Counter />
      <CounterUsingStore />
    </div>


    </>
  )  
} 

export default App
