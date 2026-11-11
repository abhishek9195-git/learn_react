import './App.css'

function App() {

  const first_name = 'Alice'
  const last_name = 'Joe'

  function get_full_name() {
    return first_name + " " + last_name;
  }
  return (
    <>
      <div className="card">
        <h1>{get_full_name()}</h1>
        <img src="https://cdn.pixabay.com/photo/2026/10/23/11/52/11-52-18-803_1280.jpg" alt="" />
              <button>View profile</button>

      </div>
    </>
  )
}

export default App
