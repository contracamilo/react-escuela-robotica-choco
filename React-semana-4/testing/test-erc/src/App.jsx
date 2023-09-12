import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testing con React & Testing Library</h1>
      <div className="card">
        <Todos />
      </div>
    </>
  )
}

export default App
