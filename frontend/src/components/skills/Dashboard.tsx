import React from "react";
import styled from "styled-components";
import SkillBar from "react-skillbars";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// import RadialSeparators from "./RadialSeparators";

const skills1 = [
  {
    type: "Python",
    level: 85,
    // color: {
    //   bar: "#3498db",
    //   title: { background: "#2980b9" },
    // },
  },
  { type: "Javascript", level: 75 },
];

const skills2 = [
  {
    type: "Python",
    level: 85,
    // color: {
    //   bar: "#3498db",
    //   title: { background: "#2980b9" },
    // },
  },
  { type: "Javascript", level: 75 },
];

const colors = {
  bar: "#005677",
  title: {
    text: "#fff",
    background: "#011C27",
  },
};

function Dashboard() {
  return (
    <Container>
      <SubContainer>
        <h3>Technical Skills</h3>
        <SkillBarCustom skills={skills1} colors={colors} height={"4vh"} />
      </SubContainer>
      <SubContainer>
        <h3>Professional Skills</h3>
          
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

function Example(props: any) {
    return (
      <div style={{ marginBottom: 80 }}>
        <hr style={{ border: "2px solid #ddd" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
          <div style={{ width: "70%" }}>
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;
