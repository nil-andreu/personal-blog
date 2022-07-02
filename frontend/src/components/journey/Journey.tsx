import React from 'react'
import styled from 'styled-components'
import Timeline from './Timeline'

function Journey() {
  return (
    <Container id="journey">
        <Title>My Journey</Title>
        <Timeline />
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3rem;
    color: white;
    margin-top: 10vh;
    // margin-left: 5rem;
`

export default Journey