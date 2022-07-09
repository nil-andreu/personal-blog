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

  // background: rgb(1,28,39);
  // background: linear-gradient(28deg, rgba(1,28,39,1) 0%, rgba(9,9,121,1) 23%, rgba(0,247,86,1) 100%);

  return (
    <ThemeProvider theme={theme}>
      <Initial />
    </ThemeProvider>
      
  )
}

export default App
