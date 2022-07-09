import React from "react";
import styled from "styled-components";
import SkillBar from "react-skillbars";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const colorsLanguages = {
  bar: "#005677",
  title: {
    text: "#fff",
    background: "#011C27",
  },
};

const colorsTools = {
    bar: "#00f756",
    title: {
      text: "#fff",
      background: "#011C27",
    },
  };

interface TechnicalSkills {
  type: string;
  level: number;
}

interface ProfessionalSkill {
  feature: string;
  percentage: number;
}

function Dashboard() {
  const skillsLanguages: TechnicalSkills[] = [
    {
      type: "Python",
      level: 80,
    },
    { type: "JavaScript", level: 75 },
    { type: "CSS", level: 65 },
    { type: "HTML", level: 60 },
    { type: "R", level: 50 },
    { type: "Golang", level: 15 },
  ];

  const skillsTools: TechnicalSkills[] = [
    { type: "Pandas", level: 70 },
    {
        type: "Django",
        level: 60,
      },
      { type: "PyTorch", level: 60 },
      { type: "Flask", level: 55 },
      { type: "React", level: 55 },
      
      { type: "FastAPI", level: 25 },
  ]

  const CircularProgressBarData: ProfessionalSkill[] = [
    {
      feature: "Communication",
      percentage: 75,
    },
    {
      feature: "Team work",
      percentage: 90,
    },
    {
      feature: "Creativity",
      percentage: 90,
    },
    {
      feature: "Project Management",
      percentage: 80,
    },
  ];

  return (
    <Container>
      <SubContainer>
        <h3>Technical Skills</h3>
        <SkillBarCustom skills={skillsLanguages} height={"4vh"} colors={colorsLanguages}/>
        <SkillBarCustom skills={skillsTools} height={"4vh"} colors={colorsTools}/>
      </SubContainer>
      <SubContainer>
        <h3>Professional Skills</h3>
        <CircularProgressBarContainer>
          {CircularProgressBarData.map((i) => {
            return (
              <VisibilitySensor>
                {({ isVisible }: any) => {
                  const percentage = isVisible ? i["percentage"] : 0;
                  return (
                    <CircularProgressbarCustomize
                      value={percentage}
                      text={`${i["feature"]}`}
                      styles={{
                        text: {
                          // Text color
                          fill: "#011C27",
                          // Text size
                          fontSize: "6px",
                        },
                        
                      }}
                      strokeWidth={5}
                    />
                  );
                }}
              </VisibilitySensor>
            );
          })}
        </CircularProgressBarContainer>
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const SubContainer = styled.div`
  width: 40vw;
  text-align: center;
  margin-top: 3vh;
`;

const SkillBarCustom = styled(SkillBar)`
  width: 40vw;
  
  div .skillbar-percent {
    padding-right: 15vw !important;
  }
`;

const CircularProgressBarContainer = styled.div`    
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const CircularProgressbarCustomize = styled(CircularProgressbar)`
  width: 25%;
  margin: 3rem 10%;
`;

export default Dashboard;
