import { useState} from 'react'
import { ThemeProvider } from 'styled-components'
import Initial from './components/initial/Initial'

function App() {
  const [count, setCount] = useState(0)
  const theme = {
    background: '#011C27',
    button: '#00f756',
    button_hover: '#00FF7F',
  }

  return (
    <ThemeProvider theme={theme}>
      <Initial />
    </ThemeProvider>
      
  )
}

export default App
