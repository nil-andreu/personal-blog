import React from 'react'
import image from "../../assets/face.jpg"
import styled from "styled-components"

function Introduction() {
  return (
    <Container>
        <ContainerText>
            <Title>Nil Andreu</Title>
        </ContainerText>
        <Image src={image} alt="" />
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const ContainerText = styled.div`
    width: 50vw;
    height: auto;
`

const Title = styled.h1`

`

const Image = styled.img`
    width: 35vw;
    height: 45vh;
`

export default Introduction