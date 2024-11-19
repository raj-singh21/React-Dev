import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2 py-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
        px-3 py-2 rounded-xl">
          <button
          onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Red"}}>Red</button>

<button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}>Green</button>

<button onClick={()=>setColor("Cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Cyan"}}>Cyan</button>

<button onClick={()=>setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}>Blue</button>

<button  onClick={()=>setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Black"}}>Black</button>

<button  onClick={()=>setColor("White")} className="outline-none px-4 py-1 rounded-full text-Black shadow-lg"
          style={{backgroundColor:"White"}}>White</button>
        </div>
      </div>
      

    </div>
    
  )
}

export default App
