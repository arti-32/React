import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCounter] = useState(15)
  const addValue = () =>{
    console.log("clicked",count);
    setCounter(count+1);
  }
  
  const removeValue = () =>{
    console.log("clicked",count);
    if(count>0) setCounter(count-1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value {count}</h2>
      <button
      onClick={addValue}>Add Value {count}</button>
      <button
      onClick={removeValue} >Decrease value {count}</button>
    </>
  )
}

export default App
