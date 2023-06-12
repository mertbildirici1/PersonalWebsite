import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import "bulma/css/bulma.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import ProjectsComponent from "./Projects.js";
import AboutComponent from "./About.js";
import ExperienceComponent from "./Experience.js";
import SkillsComponent from "./Skills.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: null,
      width: window.innerWidth,
    };
  }

  setHovering = (name) => {
    this.setState({
      hovering: name,
    });
  };

  // handle mobile
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  getOpacity = (name) => {
    if (this.state.hovering === name) {
      return 1;
    } else {
      return 0.5;
    }
  };

  getMain = () => {
    return (
      <div className="About">
        <div>
          <div style={{ fontSize: "3.5em", width: "100%", fontWeight: "bold" }}>
            Hi, I'm Mert Bildirici.
          </div>
          <img
            alt="headshot"
            style={{ maxHeight: "30vh", marginTop: 10,
            borderRadius: "50%", // Make the image circular
            width: "200px", // Adjust the size as desired
            height: "200px",
            objectFit: "cover",}}
            src={"./headshot.jpg"}
          />
        </div>
        <Grid container spacing={0} direction="column" justify="center">
          <div>
            <a
              onMouseOver={() => {
                this.setHovering("github");
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="https://github.com/kevin-fang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="GitHub"
                src={"./github.jpg"}
                style={{
                  width: "2em",
                  margin: 5,
                  opacity: this.getOpacity("github"),
                  transition: "opacity .2s",
                }}
              />
            </a>
            <a
              onMouseOver={() => {
                this.setHovering("linkedin");
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="https://www.linkedin.com/in/mert-bildirici/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="LinkedIn"
                src={"./LinkedIn_logo.png"}
                style={{
                  width: "2em",
                  margin: 5,
                  opacity: this.getOpacity("linkedin"),
                  transition: "opacity .2s",
                }}
              />
            </a>
            <a
              href="mailto:hmertbildirici@gmail.com"
              onMouseOver={() => {
                this.setHovering("email");
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
            >
              <img
                alt="Email"
                src={"./mail.jpg"}
                style={{
                  width: "2em",
                  margin: 5,
                  marginTop: 10,
                  opacity: this.getOpacity("email"),
                  transition: "opacity .2s",
                }}
              />
            </a>
          </div>
        </Grid>
        <div style={{ maxWidth: "100%", textAlign: "center", margin: 20 }}>
          <span
            style={{
              maxWidth: "800px",
              fontSize: "1.2em",
              textAlign: "justify",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "24pt",
            }}
          >
            I'm a rising sophomore at Duke University studying Computer Science and Statistics. 
            I am interested in machine learning and
            its applications to other fields such as sports, biology and finance. I
            love technology and learning new things. Currently, I am a software
            engineering intern at Recly, a startup that aims to connect workout partners.
            <br />
            <br />
            While I was at Duke, I interned at Meta as a software engineer
            intern on the Instagram Ads Ranking and Delivery team. There, I
            worked on improving algorithms used for ranking various ads across
            Stories and Reels based on user interaction.
            <br />
            <br />
            I was a software engineering intern at Google during the summer of
            2020. There, I worked on the Google Business Messages team, creating
            tools for company partners to integrate natural language processing
            into support chatbots.
            <br /> <br />
            In the summer of 2019, I worked at Intralinks as an intern on the
            innovation team, building natural language processing pipelines to
            help streamline customer acquisition. In high school, I worked with
            Curoverse Research to help us better understand the human genome.
            <br />
            <br />
          </span>
        </div>
      </div>
    );
  };

  getNavbar = () => {
    // returns navigation bar
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div
          style={{ position: "absolute", right: 0, margin: 10 }}
          id="navbarBasicExample"
          className="navbar-menu"
        >
          <AnchorLink className="navbar-item" href="#about">
            About
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#experience">
            Experience
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#projects">
            Projects
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#contact">
            Contact
          </AnchorLink>
        </div>
      </nav>
    );
  };

  getContact = () => {
    // returns contact information
    return (
      <div style={{ marginBottom: "4vh", margin: 20 }}>
        <span
          style={{
            maxWidth: "75vw",
            fontSize: "1.2em",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "24pt",
          }}
        >
          Feel free to email me at hello [at] kevinzfang.com
        </span>
      </div>
    );
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App" id="main">
        <div style={{ minHeight: "93vh" }}>
          {this.getNavbar()}
          {this.getMain()}
        </div>
        <AnchorLink href="#about" style={{ position: "relative", bottom: 0 }}>
          <i className="icon fa fa-chevron-down bounce" aria-hidden="true" />
        </AnchorLink>

        <hr className="divider" />

        <AboutComponent />
        <AnchorLink
          href="#experience"
          style={{ position: "relative", bottom: 0 }}
        >
          <i className="icon fa fa-chevron-down bounce" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />
        <ExperienceComponent />
        <AnchorLink
          href="#projects"
          style={{ position: "relative", bottom: 0 }}
        >
          <i className="icon fa fa-chevron-down bounce" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />
        <ProjectsComponent mobile={isMobile} />
        <AnchorLink href="#skills" style={{ bottom: "-100vh" }}>
          <i className="icon fa fa-chevron-down bounce" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <SkillsComponent />
        <AnchorLink href="#contact" style={{ bottom: "-100vh" }}>
          <i className="icon fa fa-chevron-down bounce" aria-hidden="true" />
        </AnchorLink>

        <div className="divider" />

        <div id="contact" style={{ width: "100%" }}>
          <div style={{ fontSize: "4em", marginTop: 0 }}>
            Want to get in touch?
          </div>
          {this.getContact()}
        </div>
        <div className="SideBySide" style={{ width: "100%" }}>
          <div style={{ marginRight: "auto", padding: 20 }}>
            © Mert Bildirici, {new Date().getFullYear()}
          </div>
          <AnchorLink
            href="#main"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              padding: 20,
              textAlign: "center",
            }}
          >
            Back to Top
          </AnchorLink>
          <a
            href="https://github.com/kevin-fang/kevinzfang.com"
            style={{ marginLeft: "auto", padding: 20 }}
          >
            Website Source Code
          </a>
        </div>
      </div>
    );
  }
}

export default App;