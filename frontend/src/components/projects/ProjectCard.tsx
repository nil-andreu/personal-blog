import React, { useEffect } from "react";
import { Project } from "../../interfaces";
import styled from "styled-components";
import Button from "../common/Button";
import { Rating } from 'react-simple-star-rating'

const ProjectCard: React.FC<Project> = ({
  difficulty,
  edited,
  github,
  id,
  image,
  likes,
  published, // Clean because published is not necessary at all to be passed in the api
  status,
  summary,
  technology,
  title,
  valoration,
}: Project) => {
  console.log(valoration)

  return <Container>
    <CardTitle>{title}</CardTitle>
    <CardImageContainer>
      <CardImage src={image}/>
    </CardImageContainer>
    <CardSummary>{summary}</CardSummary>
    <CardRating ratingValue={valoration * 10} size={25} allowHover={false} iconsCount={5} readonly={true}/>
    <Button>More</Button>

  </Container>;
};

const Container = styled.div`
  width: 24vw;
  height: 50vh;
  padding-bottom: 5vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  margin: 0 3vw 10vh 3vw;
`

const CardTitle = styled.h5`
  font-size: 1rem;
`

const CardImageContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`

const CardImage = styled.img`
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`

const CardSummary = styled.p`
  width: 80%;
  height: 25%;
  text-align: center;
`

const CardRating = styled(Rating)`
  margin-bottom: 1rem;
`

export default ProjectCard;
