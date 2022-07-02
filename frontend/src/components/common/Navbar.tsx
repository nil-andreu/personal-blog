import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Navbar() {
  return (
    <Container><Button /></Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 0 auto 0;
    height: 10vh;
    background-color: ${props => props.theme.background};
`

export default Navbar