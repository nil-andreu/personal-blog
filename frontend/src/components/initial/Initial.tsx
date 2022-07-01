import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../common/Navbar'

function Initial() {

  
  return (
      <Container>
          <Navbar />
      </Container>
    
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
`

export default Initial