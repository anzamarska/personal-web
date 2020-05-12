import React from "react";
import "../../styles/layouts/Main.scss";

const Skills = (props) => (
  <>
    <section className="section" id="skills">
      <p className="sectionTitle">skills</p>
      <div className="content">
        <p className="gitText">SKILLS </p>
        <div className="skillsDiv">
          <div className="iconDiv">
            <img className="skillsIcon" src="html5.svg" alt="" />
            <p className="gitText">html</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="css3.svg" alt="" />
            <p className="gitText">css</p>{" "}
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="sass.svg" alt="" />
            <p className="gitText">sass</p>{" "}
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="js.svg" alt="" />
            <p className="gitText">java script</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="react.svg" alt="" />
            <p className="gitText">react</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="nodejs.svg" alt="" />
            <p className="gitText">node.js</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="npm.svg" alt="" />
            <p className="gitText">npm</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="slack.svg" alt="" />
            <p className="gitText">slack</p>
          </div>
          <div className="iconDiv">
            <img className="skillsIcon" src="git.svg" alt="" />
            <p className="gitText">git</p>
          </div>
        </div>
        <ul>Basic knowledge of Python and R</ul>
        <ul>Knowledge of IBM SPSS and STATISTICA </ul>
        <ul>Critical thinking and complex problem-solving skills</ul>
        <ul>Extensive active listening and communication skills </ul>
        <div className="skillsDiv">
          <p className="gitText">Languages</p>
          <ol className="languages">
            <li>English C1 </li>
            <li>German B1 </li>
            <li>Polish native</li>
          </ol>
        </div>
      </div>
    </section>
  </>
);

export default Skills;
