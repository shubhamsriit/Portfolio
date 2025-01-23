import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import js from "../../Assets/JavaScript-logo.png";
import ts from "../../Assets/Typescript_logo_2020.svg.png";
import react from "../../Assets/React-icon.svg.png";
import angular from "../../Assets/angular.png";
import html from "../../Assets/download.png";
import css from "../../Assets/CSS3_logo_and_wordmark.svg.png";
import bootstarp from "../../Assets/Bootstrap_logo.svg.png";
import pwa from "../../Assets/pwa.png";

const data = [
  { name: "Javascript", icons: js },
  { name: "Typescript", icons: ts },
  { name: "React", icons: react },
  { name: "Angular", icons: angular },
  { name: "Html", icons: html },
  { name: "CSS", icons: css },
  { name: "Bootstap", icons: bootstarp },
  { name: "PWA", icons: pwa },
];

function Techstack() {
  const [tech,setTech] = useState([]);
  useEffect(()=>{
    setTech(data);
  },[]);
  return (
    <Row style={{display:"flex", justifyContent: "center", paddingBottom: "50px" }}>
      {tech?.map((ele) => {
        return <Col xs={4} md={2} className="tech-icons">
          <img
            src={ele?.icons}
            alt={ele?.name}
            className="w-100"
            style={{ aspectRatio: "2/2",objectFit:"contain"}}
          />
        </Col>;
      })}
    </Row>
  );
}

export default Techstack;
