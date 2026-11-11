import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  return (
    <>
      <h1>{counter}</h1>
      <p>{
        counter <= 0 ? <li>Invalid age</li> 
        : counter < 18 ? <li>You can't vote</li>
        : counter > 100 ? <li>Age can't be more than 40</li>
        : <li>Yes, You can vote</li>  
        }
      </p>
      <button onClick={() => setCounter(++counter)}>Increment</button>
    </>
  )
}

export default App
