import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/me.JPG";

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
              Who <strong className="blue">Am I</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" id="me" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset </strong>
        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
