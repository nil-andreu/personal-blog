import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import gif from "../../assets/loader.gif";

interface Project {
  difficulty: number;
  edited: string;
  github: string;
  id: number;
  preview: string;
  likes: number;
  published: string;
  status: boolean;
  summary: string;
  technology: string[];
  title: string;
  valoration: number;
}

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
        <ProjectsContainer />
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
`;

const Loading = styled.div`
  width: 10vw;
  height: auto;

  img {
    width: 10vw;
    height: auto;
  }
`;

export default Projects;
