import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import gif from "../../assets/loader.gif";
import { Project } from "../../interfaces";

function Projects() {
  const REACT_APP_API_URL = "http://localhost:8000/";
  const [projects, setProjects] = useState<Project[]>([]); // We expect to store an array of Project
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // We expect to obtain a list of projects
    axios
      .get<Project[]>(`${REACT_APP_API_URL}api/projects/`)
      .then((res) => res.data)
      .then((res) => setProjects(res))
      .then((res) => setLoaded(true));
  }, []);

  return (
    <Container>
      <Title>Projects</Title>
      {loaded ? (
        <ProjectsContainer>
          {projects.map((project) => {
            return (
              <ProjectCard key={project.id}
              
                difficulty={project.difficulty}
                edited={project.edited}
                id={project.id}
                github={project.github}
                image={project.image}
                likes={project.likes}
                published={project.published}
                status={project.status}
                summary={project.summary}
                technology={project.technology}
                title={project.title}
                valoration={project.valoration}
              />
            );
          })}
        </ProjectsContainer>
      ) : (
        <Loading>
          <img src={gif} alt="Loading" />
        </Loading>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  min-height: 40vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  margin-top: 5vh;
`;

const ProjectsContainer = styled.div`
  width: 100vw;
  height: auto;
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Loading = styled.div`
  width: 10vw;
  height: auto;

  img {
    width: 10vw;
    height: auto;
  }
`;

// const ProjectCard = styled.div`

// `

export default Projects;
