import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-dark">
          <p style={{ textAlign: "justify" }}>
            <span>
              I'm a passionate Frontend Developer with ~6 years of experience
              building scalable, user-centric web applications using modern
              technologies like React, Angular, JavaScript (ES6+), TypeScript,
              and responsive UI frameworks. I focus on writing clean,
              maintainable code and love crafting seamless user experiences that
              align with business goals. I have experience working in agile
              teams, collaborating closely with designers, backend developers,
              and product managers to deliver high-impact solutions.
               🔧 Tech Stack: React, Angular,NodeJS, JavaScript, TypeScript, HTML5, CSS3, Redux,
              REST APIs, Git.
            </span>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
