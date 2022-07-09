import React from "react";
import styled from "styled-components";
import SkillBar from "react-skillbars";

import {
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

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
    const text = "Communication"
  return (
    <Container>
      <SubContainer>
        <h3>Technical Skills</h3>
        <SkillBarCustom skills={skills1} colors={colors} height={"4vh"} />
      </SubContainer>
      <SubContainer>
        <h3>Professional Skills</h3>
        <VisibilitySensor>
            {({ isVisible }: any) => {
              const percentage = isVisible ? 90 : 0;
              return (
                <CircularProgressbarCustomize
                  value={percentage}
                  text={`${text}`}
                  styles={{
                    text: {
                        // Text color
                        fill: '#011C27',
                        // Text size
                        fontSize: '6px',
                      },
                  }}
                />
              );
            }}
          </VisibilitySensor>
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

const CircularProgressbarCustomize = styled(CircularProgressbar)`
    font-size: 10px !important;
`

export default Dashboard;
