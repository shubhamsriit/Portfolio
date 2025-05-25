import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume/Resume.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "350px" }}
          >
            <FaCloudDownloadAlt className="fs-4" />
            &nbsp; Resume
          </Button>
        </Row>

        <Container fluid>
          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
          {/* <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row> */}
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
