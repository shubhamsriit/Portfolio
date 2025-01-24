import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Card from "react-bootstrap/Card";
import quickride from "../../Assets/quickride.png";
import gateway from "../../Assets/gateway.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="fs-3">
          Companies where <strong className="purple">I worked</strong>
        </p>
        <Row>
          <Col md={4} className="mb-2">
            <Card>
              <Card.Body>
                <img src={quickride} alt="quickride" width={150} height={150} />
                <section className="mt-3 p-3" style={{ textAlign: "justify" }}>
                  Quick Ride is India’s Largest & top rated carpooling and
                  taxipool network. Quick Ride helps commuters to start sharing
                  the ride instead of traveling alone. Innovative technology to
                  discover, connect, coordinate and cost-share in a seamless
                  manner. Quick Ride automates the end to end process of
                  carpooling & bikepooling and makes pooling safe and
                  hassle-free for the commuters. Quick Ride makes your office
                  commute a fun experience everyday.{" "}
                  <a href="https://quickride.in/">Quickride</a>
                </section>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card>
              <Card.Body>
                <img src={gateway} alt="quickride" height={160} />
                <section className="mt-2 p-3" style={{ textAlign: "justify" }}>
                  GSS is a privately held enterprise located in New Delhi. Found
                  in 2010, GSS offers wide range of services to help companies
                  deliver best online customer experience with shortest go to
                  market time. We understand the end to end life cycle of
                  successful online business engine. Starting from ideating to
                  build and release to a fully functional Microservice or API
                  based platform, hosted in cloud with on the fly resource
                  management.
                  <br />
                  <a href="https://www.gssltd.co.in/">
                    Gateway software solutions
                  </a>
                </section>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md={4} className="mb-2">
            <Card>
              <Card.Body>
                <img src={hdor} alt="quickride" height={160} />
                <section className="mt-2 p-3" style={{ textAlign: "justify" }}>
                  Hdor is world's largest virtual platform. The HDOR fitness
                  platform provides the convenience of doing your fitness
                  activity, run or bike, at your convenience. Just choose your
                  time and place of your activity to ensure participation in our
                  fitness run series or distance challenges. HDOR platform is the
                  worldwide leader in virtual events. 50,000 participants who
                  have registered with us can attest to that!. <a href="https://hdor.com/100-days-of-running-2023/">100 Days of Running</a>
                  <br/> <a href="https://hdor.com/">HDOR</a>
                </section>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
