import { useState , useCallback ,useEffect ,useRef } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed ] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password , setPassword] = useState("");

  //useRef hook :
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`?>"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setPassword(pass);


  } , [length , numberAllowed , charAllowed , setPassword])

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordgenerator()},[length , numberAllowed , charAllowed , passwordgenerator])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700"> 
      <h1 className='text-white text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full px-1 py-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}

        />
        <button 
        onClick={copyPasswordtoClipboard}
        className='outline-none bg-blue-500 text-white py-2 px-2 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>setNumberAllowed((prev)=>!prev)}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex text-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id='character-input'
          onChange={()=>setCharAllowed((prev)=>!prev)}
          />
          <label htmlFor='character-input'>Character</label>
        </div>
      </div>
       </div>
    </>
  )
}

export default App
