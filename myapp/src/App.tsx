import { useState } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState('John Doe')

  const updateName = (value: string) => {
    setName(value)
  }

  return (
    <>
      <h1>App works</h1>
      <p>Name: {name}</p>
      <button onClick={() => updateName('James Doe')}>Update name</button>
    </>
  )
}

export default App
