import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-dark">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Tiwari </span>
            <span>
              having ~6 years of experience in creating dynamic, user-centric,
              and visually appealing web applications. Proficient in front-end
              technologies such as HTML5, CSS3, JavaScript, and modern
              frameworks like React, Angular. Strong expertise in translating
              design concepts into responsive and interactive user interfaces,
              ensuring seamless user experiences across all devices and
              platforms. Passionate about optimizing code, improving
              performance, and staying up-to-date with the latest industry
              trends and best practices.{" "}
            </span>
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
