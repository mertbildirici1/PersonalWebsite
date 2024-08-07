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

  createSkillsRow = (skillType, skills) => {
    return (
      <div>
        <span style={{ fontSize: "1.2em" }}>{skillType}</span>
        <br />
        <div className="SideBySide" style={{ flexWrap: "wrap" }}>
          {skills.map((skill) => {
            if (skill.icon) {
              return (
                <div
                  onMouseOver={() => {
                    this.setHovering(skill.name);
                  }}
                  onMouseOut={() => {
                    this.setHovering(null);
                  }}
                  onTouchStart={() => {
                    this.setHovering(skill.name);
                  }}
                  onTouchEnd={() => {
                    this.setHovering(null);
                  }}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  <i
                    className={skill.icon}
                    style={{
                      fontSize: "3.6em",
                      opacity: this.getOpacity(skill.name),
                      transition: "opacity .2s",
                    }}
                  />
                  <br />
                  <Fade timeout={200} in={this.getVisibility(skill.name)}>
                    <span style={{ fontSize: ".8em" }}>{skill.name}</span>
                  </Fade>
                </div>
              );
            } else {
              return (
                <div
                  onMouseOver={() => {
                    this.setHovering(skill.name);
                  }}
                  onMouseOut={() => {
                    this.setHovering(null);
                  }}
                  onTouchStart={() => {
                    this.setHovering(skill.name);
                  }}
                  onTouchEnd={() => {
                    this.setHovering(null);
                  }}
                  style={{ marginLeft: 20, marginRight: 20 }}
                >
                  <img
                    alt={skill.name}
                    src={skill.logo}
                    style={{
                      height: "3.3em",
                      opacity: this.getOpacity(skill.name),
                      transition: "opacity .2s",
                    }}
                  />
                  <br />
                  <Fade timeout={200} in={this.getVisibility(skill.name)}>
                    <span style={{ fontSize: ".8em" }}>{skill.name}</span>
                  </Fade>
                </div>
              );
            }
          })}
        </div>
        <br />
      </div>
    );
  };

  getSkills = () => {
    // Calculate the middle index to split the languages array
    const splitIndex = Math.ceil(skills.skills.length / 2);
    const firstHalfLanguages = skills.skills.slice(0, splitIndex);
    const secondHalfLanguages = skills.skills.slice(splitIndex);
    return (
      <div>
          {this.createSkillsRow("", firstHalfLanguages)}
          {this.createSkillsRow("", secondHalfLanguages)}
        <div className="SideBySide" style={{ width: "100%" }}>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div id="skills" style={{ width: "100%" }}>
        <div style={{ fontSize: "4em", marginTop: 0, color: this.state.darkMode ? "white" : "black" }}>
          <b class="b "> Skills</b>
        </div>
        {this.getSkills()}
      </div>
    );
  }
}