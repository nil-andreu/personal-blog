import { useState } from 'react'
import Initial from './components/initial/initial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Initial />
    </div>
  )
}

export default App
