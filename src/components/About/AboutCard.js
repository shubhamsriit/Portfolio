import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-dark">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Tiwari </span>
            from <span className="purple"> Gwalior, Madhya Pradesh, India.</span>
            <span>I am a Frontend Developer. My overall experience in software development is 4 years. And </span>
            currently, I am working as a software Engineer at
            HDOR.
            <br />
           
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
