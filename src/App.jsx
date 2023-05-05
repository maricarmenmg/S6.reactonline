import { useState } from 'react'
import Scene from './components/scene/Scene'
import './App.css'

 function App() {
  const [count, setCount] = useState(0)


  return (
    <>

   <Scene />
     
      {/* 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}

      
    </>
  )
}

export default App
