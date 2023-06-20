import React, { Component } from "react";

export default class AboutComponent extends Component {
  getAbout = () => {
    return (
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
          Raised in both the US and Turkey, I take immense pride in my
          identity as a global citizen. This upbringing has bestowed upon me
          a unique perspective that greatly enriches both my personal and professional life.
          I find great joy in exploring diverse cultures, embracing different viewpoints, and bridging
          the gaps between various communities.
          <br />
          <br />
          My passion lies in the realm of technology, where I am constantly driven to 
          explore new frontiers and harness the power of emerging innovations. It is through 
          this exploration that I strive to create and develop innovative projects that push 
          boundaries and make a positive impact. The intersection of Computer Science and Statistics 
          serves as the perfect conduit for my ambitions, as it allows me to navigate a vast 
          and ever-evolving landscape of knowledge and tools.
          <br />
          <br />
          I am fascinated by the depth and intricacies of this field, as it constantly 
          unveils new opportunities for growth and discovery. By staying at the forefront of 
          technological advancements, I continuously equip myself with the skills and knowledge 
          necessary to tackle complex challenges and drive meaningful change. The dynamic nature 
          of Computer Science and Statistics fuels my insatiable curiosity and motivates me to 
          push beyond conventional boundaries.
          <br />
          <br />
          In high school, I had the privilege of attending Robert College, a G30 high school 
          and the most prestigious educational institution in Turkey,
           with an acceptance rate of approximately 0.15%. During my time at Robert College,
            I not only gained a deeper appreciation for non-STEM fields but also cultivated 
            essential skills in writing with clarity and precision, which have proven to be 
            invaluable in my journey.
          <br />
          <br />
          When I'm not working on my own projects, you'll likely find me at the gym, pool, 
          soccer field, or indulging in hobbies like candle making and cooking. 
          These activities bring me joy, balance, and allow me to explore my creativity 
          outside the realm of technology.
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