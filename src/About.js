import React, { Component } from "react";

export default class AboutComponent extends Component {
  getAbout = () => {
    return (
      <div style={{ maxWidth: "100%", textAlign: "center", margin: 20 }}>
        <span style={{ maxWidth: "800px", fontSize: "1.2em", textAlign: "justify", display: "block", marginLeft: "auto", marginRight: "auto", lineHeight: "24pt" }}>
          
        </span>
      </div>
    );
  };
  render() {
    return (
      <div id="about" style={{ width: "100%" }}>
        <div
          style={{ fontSize: "4em", margin: 30, marginTop: 0, marginBottom: 0 }}
        >
          <b style={{color: "black"}}>About Me</b>
        </div>
        {this.getAbout()}
        <br />
      </div>
    );
  }
}