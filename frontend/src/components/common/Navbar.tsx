import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link as AnimateLink } from "react-scroll";
import scrollFunction from "../utilities/scrollFunction";

function Navbar() {
    // Creationg of the Text Links
  const textLink: { [key: string]: string } = {
    journey: "My Journey",
    skills: "My Skills",
    contact: "Contact"
    
  };

  // Adding interactivity when user scrolls
  window.onscroll = function() {scrollFunction()};

  return (
    <Container id="navbar">
      {Object.keys(textLink).map((key) => {
        return (
          <TextLink
            activeClass="active"
            to={key}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {textLink[key]}
          </TextLink>
        );
      })}
      <ButtonContainer>
        <Button>Projects</Button>
        <Button>Blog</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
position: fixed;
  margin: 0 0 auto 0;
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  &:hover {
      // In the case of hover, we overwrite the scrollFunction values
      opacity: 1 !important;
      background-color: ${(props) => props.theme.background} !important;
  }
`;

const TextLink = styled(AnimateLink)`
  color: white;
  padding: 1.5rem;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Navbar;
