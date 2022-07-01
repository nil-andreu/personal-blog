import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Container><div></div></Container>
  )
}

const Container = styled.div`
    margin: 0 0 auto 0;
    height: 10vh;
    background-color: ${props => props.theme.background};

    div {
        width: 10rem;
        height: 2rem;
        background-color: ${props => props.theme.button};
    }
`

export default Navbar