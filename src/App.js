import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import "bulma/css/bulma.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

import ProjectsComponent from "./Projects.js";
import AboutComponent from "./About.js";
import ExperienceComponent from "./Experience.js";
import SkillsComponent from "./Skills.js";
import "./navbar.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: null,
      width: window.innerWidth,
      showContact: false,
      darkMode: false,
    };
  }

  setHovering = (name) => {
    this.setState({
      hovering: name,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

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
      <div className={`About ${this.state.darkMode ? "dark-mode" : ""}`} style={{ color: this.state.darkMode ? "white" : "black" }}>
        <div>
        <div className={`typing ${this.state.darkMode ? "dark-mode" : ""}`}>Hi, I'm Mert Bildirici</div>

          <img
            alt="headshot"
            style={{
              maxHeight: "30vh",
              marginTop: 10,
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
              href="https://www.linkedin.com/in/bildirici/"
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
            I'm a junior at Duke University studying Computer Science. 
            I am passionate about machine learning and its
            applications in sports, biology, and finance. I thrive on staying
            updated with the latest advancements in technology and love
            exploring new areas of knowledge. I am excited to leverage my skills
            and knowledge to contribute to innovative solutions that make a
            positive impact on society.
            <br />
            Raised in both the US and Turkey, I pride myself on my global identity, 
              which enriches my personal and professional life. My passion for technology 
              drives me to explore new innovations and create impactful projects. The intersection 
              of Computer Science, Mathematics, and Statistics fuels my ambitions, offering endless 
              opportunities for growth. I stay updated with technological advancements to tackle complex 
              challenges and drive meaningful change.
              At Robert College in Turkey, I developed a deeper appreciation for 
              non-STEM fields and honed my writing skills. Outside of work, I enjoy staying 
              active at the gym, pool, or soccer field, and pursuing hobbies like candle making and 
              cooking, which bring balance and creativity to my life.
          </span>
        </div>
      </div>
    );
  };

  getNavbar = () => {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu" style={{ position: "absolute", right: 0, margin: 10 }}>
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
        <a className="navbar-item" href="#contact" onClick={this.showContactInfo}>
        Contact
        </a>
        <span onClick={this.toggleDarkMode} className="navbar-item">
        ☀️ / 🌙
        </span>
      </div>
      </nav>
    );
  };

  getContact = () => {
    return (
      <div style={{ marginBottom: "2vh" }}>
        {this.state.showContact && (
          <div className="contact-info">
            <span
              style={{
                maxWidth: "75vw",
                fontSize: "0.8em",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Phone: +1 919-433-6434
              <br />
            </span>
          </div>
        )}
      </div>
    );
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }), () => {
      if (this.state.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  };

  showContactInfo = (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    this.setState((prevState) => ({
      showContact: !prevState.showContact,
    }));
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className={`App ${this.state.darkMode ? 'dark-mode' : ''}`} id="main">
        <div style={{ minHeight: "93vh" }}>
          {this.getNavbar()}
          {this.getMain()}
        </div>
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

        <div className="SideBySide" style={{ width: "100%"}}>
          <AnchorLink
            className="backtotop"
            href="#main"
            style={{
              padding: 20,
              textAlign: "center",
              display: "block",
              marginTop: -40,
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
