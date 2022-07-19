import React from 'react'
import styled from "styled-components"
import Dashboard from './Dashboard'
// import Cloud from './Cloud'

function Skills() {
  return (
    <Container id="skills">
      <Dashboard />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  padding-top: 10vh;
`

export default Skills