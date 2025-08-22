import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tommorowtask from './components/Tommorowtask'

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0)
 

  useEffect(()=>{
    document.title="Tbet"
    
  }, [])

  return (
    <div>
      <h1 className="head">welocome to tbet</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default App
