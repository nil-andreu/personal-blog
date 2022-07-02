import React from 'react'
import image from "../../assets/face.jpg"
import styled from "styled-components"

function Introduction() {
  return (
    <Container>
        <ContainerText>
            <Title>Nil Andreu</Title>
            <Text>
                I am a self-taught software developer who loves learning new things. Started coding 3 years ago,
                and I am being more motivated to improve as the time passes.
            </Text>
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
    width: 45vw;
    height: auto;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 3rem;
    margin: 20vh 0 0  5vw;
    // margin-left: 5rem;
`

const Text = styled.h4`
    font-weight: 200;
    font-size: 2rem;
    margin: 5vh 0 0 5vw;
`

const Image = styled.img`
    width: 35vw;
    height: 45vh;
`

export default Introduction