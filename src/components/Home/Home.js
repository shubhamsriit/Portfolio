import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Techstack from "../About/Techstack";

function Home() {
  return (
    <section>
      <Container fluid  id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading text-dark">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name text-dark">
                I'M
                <strong className="main-name"> Shubham Tiwari</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          
      <div className="d-flex justify-content-center mb-2 w-100">
        <div>
        <h1 className=" text-dark">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        </div>
      </div>
        <Techstack />

        </Container>
      </Container>
    </section>
  );
}

export default Home;
