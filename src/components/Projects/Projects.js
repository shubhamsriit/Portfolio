import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qrpwa from "../../Assets/quickridepwa.PNG";
import qrwebsite from "../../Assets/qrwebsite.PNG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-dark">
          My <strong className="purple">Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrpwa}
              isBlog={false}
              title="Quickride Web App"
              description="Quick Ride PWA is a web app used for create carpool and taxipool rides.Quickride having features like Profile, My rides, My contribution, User preferences, Settings, Coupons etc."
              demoLink="https://pwa.getquickride.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrwebsite}
              isBlog={false}
              title="Quickride Website"
              description="Quick Ridewebsite is a company website for user. Having sections like Contact us, About us, Carrer etc.  "
              demoLink="https://quickride.in"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
