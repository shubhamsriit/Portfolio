import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import qrpwa from "../../Assets/quickridepwa.PNG";
import qrwebsite from "../../Assets/qrwebsite.PNG";
import hdor from "../../Assets/hdorwebapp.png";


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
              description="Quick Ride is India's largest carpool company which connects Corporate ride seekers to Corporate car owners. Connects and commutes safe and affordable rides by reducing vehicles on the road and saving fuel expenses."
              demoLink="https://pwa.getquickride.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrwebsite}
              isBlog={false}
              title="Quickride Website"
              description="Quick Ride is India's largest carpool company which connects Corporate ride seekers to Corporate car owners. Connects and commutes safe and affordable rides by reducing vehicles on the road and saving fuel expenses."
              demoLink="https://quickride.in"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hdor}
              isBlog={false}
              title="HDOR Web App"
              description="The HDOR fitness platform provides the convenience of doing your fitness activity, run or bike, at your convenience. Just choose your time and place of your activity to ensure participation in our fitness run series or distance challenges."
              demoLink="https://app.hdor.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
