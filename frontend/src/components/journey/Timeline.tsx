import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {ReactComponent as WorkIcon} from "../../assets/work.svg"
import {ReactComponent as SchoolIcon} from "../../assets/work.svg"

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#005677", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2018 - 2022"
        iconStyle={{ background: "#005677", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor Degree In Business Administration
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Barcelona, Spain</h4>
        <p>
          Enrolled in the Bachelor Degree in Business Administration in the UPF.
          Achieved the <b>top 3% position</b> in my promotion.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2021"
        contentStyle={{ background: "#005677", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#005677", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Specialization in Front-End with React.js
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Barcelona Activa</h4>
        <p>
          Enrolled a program in Barcelona Activa that taught me about front-end.
          I have reviewed concepts that go from the basics of{" "}
          <b>HTML, CSS (with SASS & Boostrap) & JavaScript</b>, to more
          intermediate like <b>React (with Hooks, Router, ...) & TypeScript</b>.
          Completed successfully the 9 projects.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2021"
        contentStyle={{ background: "#005677", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#005677", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Deep Learning</h3>
        <h4 className="vertical-timeline-element-subtitle">Udacity</h4>
        <p>
          Course about deep learning with PyTorch. Learnt the basics of
          Artificial Neural Networks, starting with a simple{" "}
          <b>Multi-Layer Perceptron</b>, to <b>Convolutional Neural Networks</b>
          , to then do <b>Recurrent Neural Networks</b> and{" "}
          <b>Generative Adversial Neural Networks</b>.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2022"
        contentStyle={{ background: "#005677", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#005677", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">MQA</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Advanced Quantitative Methods
        </h4>
        <p>
          Enrolling the Advanced Quantitative Methods Program at UPF, in
          specific, doing the subjects of
          <b>Modern Statistical Computing with R</b>,{" "}
          <b>Crowds, Networks & Markets</b>, <b>Operation Research</b>, and
          finally, <b>Real Analysis</b>.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - 2022"
        contentStyle={{ background: "#005677", color: "white" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#005677", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Intern at Veepee</h4>
        <p>
          Have done an internship for 6 months where developed a{" "}
          <b>deep learning algorithm for image classification</b>. Achieved +80%
          on top-1 accuracy, with +400 labels. For this task, also extracted
          more than <b>3 million images</b>, with +20 characteristics from those images. 
          Deployed this model with <b>Flask & Docker</b> to the internal cloud.
        </p>
        <p>
          Have done other tasks as well, as for example developing & deploying
          to <b>EC2</b> a <b>Django webapp </b>
          to track the donations on the Solidarity Days (during 1 month, for
          +5.000 employees).
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
}

export default Timeline;
