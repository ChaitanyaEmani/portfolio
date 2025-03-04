import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chaitanya Emani </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            <br/>
            I am currently looking for<span className="purple"> opportunities. </span>
            <br />
            <br/>
            I am a passionate <span className="purple">Frontend Developer</span> with a strong foundation in <span className="purple"> React, JavaScript, and modern web technologies.  </span> 
            
            <br />
            <br />
            I enjoy building <span className="purple">responsive, user-friendly, and visually appealing </span> web applications with <span className='purple'>smooth animations and intuitive designs.</span>
            <br/>
            <br/>
            I am also keen on improving my <span className='purple'>problem-solving</span> skills through <span className='purple'>DSA and coding challenges.</span>  Always eager to learn and explore <span className='purple'>new technologies</span>, I strive to create impactful solutions that <span className='purple'>enhance user experience.</span>
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chaitanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
