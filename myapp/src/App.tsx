import './App.css'

function App() {

  function clickMe() {
    alert('You clicked me.')
  }
  function getFullName(firstName: string, lastName: string) {
    alert(firstName + " " + lastName)
  }

  return (
    <>
      <h1>App works</h1>
      <button onClick={clickMe}>click me</button>
      <button onClick={() => getFullName('John', 'Doe')}>Fetch Name</button>
    </>
  )
}

export default App
