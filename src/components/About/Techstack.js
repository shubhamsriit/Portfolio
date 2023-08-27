import React from "react";
import { Col, Row } from "react-bootstrap";
import js from "../../Assets/JavaScript-logo.png";
import ts from "../../Assets/Typescript_logo_2020.svg.png";
import react from "../../Assets/React-icon.svg.png";
import angular from "../../Assets/angular.png";
import html from "../../Assets/download.png";
import css from "../../Assets/CSS3_logo_and_wordmark.svg.png";
import bootstarp from "../../Assets/Bootstrap_logo.svg.png";
import pwa from "../../Assets/pwa.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={js}
          alt="Java script"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={ts}
          alt="Type Script"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={react}
          alt="React"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={angular}
          alt="angular"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={html}
          alt="angular"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={css}
          alt="angular"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={bootstarp}
          alt="angular"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={pwa}
          alt="angular"
          className="w-100"
          style={{ aspectRatio: "2/2" }}
        />
      </Col>
    </Row>
  );
}

export default Techstack;
