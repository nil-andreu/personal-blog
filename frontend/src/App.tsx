import { useState} from 'react'
import { ThemeProvider } from 'styled-components'
import Initial from './components/initial/Initial'

function App() {
  const [count, setCount] = useState(0)
  const theme = {
    background: '#011C27',
    button: '#50D8D7',
    button_hover: '#064189',
  }

  return (
    <ThemeProvider theme={theme}>
      <Initial />
    </ThemeProvider>
      
  )
}

export default App
