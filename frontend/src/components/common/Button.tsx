import React from 'react'
import styled from 'styled-components'

function Button() {
  return (
    <Container><p>Projects</p></Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 10px;
    width: 10rem;
    height: 3rem;
    background-color: ${props => props.theme.button};

    &:hover {
        background-color: ${props => props.theme.button_hover};
        cursor: pointer;

        p {
            color: white;
        }
    }

    p {
        color: ${props => props.theme.background};

    }
`


export default Button