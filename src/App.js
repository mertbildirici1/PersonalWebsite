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
          <div className="typing" style={{ fontSize: "3.1em", width: "100%", fontWeight: "bold" }}>
            Hi, I'm Mert Bildirici
          </div>

          <img
            alt="headshot"
            style={{
              maxHeight: "30vh", marginTop: 10,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
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
              href="https://github.com/mertbildirici1"
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
              onMouseOver={() => {
                this.setHovering("instagram");
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="https://www.instagram.com/mertbildiricii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Instagram"
                src={"./instagram.png"}
                style={{
                  width: "2em",
                  margin: 5,
                  opacity: this.getOpacity("instagram"),
                  transition: "opacity .2s",
                }}
              />
            </a>
            <a
              onMouseOver={() => {
                this.setHovering("resume");
              }}
              onMouseOut={() => {
                this.setHovering(null);
              }}
              href="./cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Resume"
                src={"./curriculum-vitae.png"}
                style={{
                  width: "2em",
                  margin: 5,
                  opacity: this.getOpacity("resume"),
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
            I am passionate about machine learning and its applications in sports, biology, and finance.
            I thrive on staying updated with the latest advancements in technology and love
            exploring new areas of knowledge. I am excited to leverage my skills and knowledge
            to contribute to innovative solutions that make a positive impact on society.
            <br />
            <br />
            Currently, I am a software engineering intern at Valensas Technologies, a software company that
            provides services to big firms in Turkey. I am working on an app called
            PayPro, which allows users to make purchases and expenses using a
            pre-authorized payment method, even in areas with limited internet connectivity.
            This is a service for Turkish Airlines, the biggest company of the country. It
            will allow fliers to pay for in-flight purchases without the need of cards.
            <br />
            <br />
            I am also interning at Recly, a
            startup that aims to connect workout partners. I am working on fixing bugs on the app
            and developing new features to better the user experience.
            <br /> <br />
            During the school year, I was part of the Duke Applied Machine Learning Group.
            My group worked on a project that used AI/ML techniques to assess Parkinson's Disease
            progression.
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
        <button
          className="contact-button"
          onClick={this.showContactInfo}
        >
          Contact
        </button>
        {/* Display the contact information when it's visible */}
        {this.state.showContact && (
          <div className="contact-info">
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
              Email: hmertbildirici@gmail.com
              <br />
              Phone: +1234567890
            </span>
          </div>
        )}
      </div>
    );
  };

  // Method to toggle the display of contact information
  showContactInfo = () => {
    this.setState((prevState) => ({
      showContact: !prevState.showContact,
    }));
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
          <i className="contact-button" aria-hidden="true" />
        </AnchorLink>



        <div id="contact" style={{ width: "100%" }}>
          {this.getContact()}
        </div>
        <div className="SideBySide" style={{ width: "100%" }}>
          <AnchorLink
            href="#main"
            style={{
              padding: 20,
              textAlign: "center",
              display: "block"
            }}
          >
            Back to Top
          </AnchorLink>
        </div>
      </div>
    );
  }
}

export default App;