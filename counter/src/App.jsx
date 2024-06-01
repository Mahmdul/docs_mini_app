import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, SetCounter] = useState(5)
  const addValue = () => {
    if(counter < 20){
      counter=counter+1
      SetCounter(counter)
      // console.log(counter)
    }

    
    // counter+=1
    // SetCounter(counter+1)
  }

  const removeValue = () => {
    if(counter>0){
      counter=counter-1
      SetCounter(counter)
      // console.log(counter)

    }
    // SetCounter(counter-1)
  }
  

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Increase value {counter}</button>
    <br />
    <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
