import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(15)

  //let counter =15;
  const addValue =()=>{
    if(counter<20){
      setcounter(counter+1);
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setcounter(counter-1);
    }
  }

  return (
    <>
     
      <h1> React Counter Basic </h1>
      <h2> Counter Value : {counter} </h2>

      <button
      onClick={addValue}
      > Add Value {counter} </button>
      <br/>
      <button
      onClick={removeValue}
      > Remove Value {counter}</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
