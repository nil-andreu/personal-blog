import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Navbar from '../common/Navbar'
import Journey from "../journey/Journey"
import Introduction from "../introduction/Introduction"
import Skills from '../skills/Skills'

function Initial() {
  return (
      <Container>
          <Navbar />
          <Introduction />
          <Journey />
          <Skills />
      </Container>
    
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
`

export default Initial