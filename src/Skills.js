import React, { Component } from "react";
import Fade from "@material-ui/core/Fade";
let skills = require("./skills.json");

export default class SkillsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: null,
    };
  }

  getVisibility = (name) => {
    if (this.state.hovering === name) {
      return true;
    } else {
      return false;
    }
  };

  setHovering = (name) => {
    this.setState({
      hovering: name,
    });
  };

  getOpacity = (name) => {
    if (this.state.hovering === name) {
      return 1;
    } else {
      return 0.6;
    }
  };

  createSkillsRow = (title, skills, splitIntoTwo = false) => {
    if (!splitIntoTwo) {
      // Original logic for a single row
      return (
        <div>
          <h2>{title}</h2>
          <div className="skillsRow">
            {skills.map(skill => (
              <div key={skill.name} className="skill">
                <Fade timeout={200} in={this.getVisibility(skill.name)}>
                  <span style={{ fontSize: ".8em" }}>{skill.name}</span>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Splitting logic for two rows
      const midpoint = Math.ceil(skills.length / 2);
      const firstHalf = skills.slice(0, midpoint);
      const secondHalf = skills.slice(midpoint);
  
      return (
        <div>
          <h2>{title}</h2>
          <div className="skillsRow">
            {firstHalf.map(skill => (
              <div key={skill.name} className="skill">
                <Fade timeout={200} in={this.getVisibility(skill.name)}>
                  <span style={{ fontSize: ".8em" }}>{skill.name}</span>
                </Fade>
              </div>
            ))}
          </div>
          <div className="skillsRow">
            {secondHalf.map(skill => (
              <div key={skill.name} className="skill">
                <Fade timeout={200} in={this.getVisibility(skill.name)}>
                  <span style={{ fontSize: ".8em" }}>{skill.name}</span>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  getSkills = () => {
    return (
      <div>
        {this.createSkillsRow("Languages", skills.languages, true)}
        {this.createSkillsRow("Libraries", skills.libraries, false)}
        {this.createSkillsRow("Miscellaneous", skills.misc, false)}
        <div className="SideBySide" style={{ width: "100%" }}>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div id="skills" style={{ width: "100%" }}>
        <div style={{ fontSize: "4em", marginTop: 0}}>
          <b style={{color: "black"}}>Technical Skills</b>
        </div>
        {this.getSkills()}
      </div>
    );
  }
}