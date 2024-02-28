import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiTrader from "../../Assets/Projects/ai-trader.png";
import myStreet from "../../Assets/Projects/my-street.png";
import portfolio from "../../Assets/Projects/portfolio_img.png";
import algoTrader from "../../Assets/Projects/algo-trader.png";
import myGpt from "../../Assets/Projects/my-gpt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Porfolio [This Website]"
              description="This site is a comprehensive showcase of my professional skills and projects in software development and design. Built with React.js, it reflects my proficiency in front-end development and my passion for creating intuitive, visually appealing digital experiences."
              ghLink="https://github.com/RyanBuss01/Portfolio-website"
              demoLink="/Portfolio-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myGpt}
              isBlog={false}
              title="My GPT"
              description="This Natural Language Proccessing chatbot, developed in React, communicates by understanding and responding to human language with cutting edge Machine Learning technology. Trained on tokenized data in Javascript using Tensorflow (python and PyTorch in old version), it breaks down text to learn language patterns, enabling nuanced interactions."
              ghLink="https://github.com/RyanBuss01/my-gpt"
              demoLink="https://ryanbuss01.github.io/my-gpt/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={algoTrader}
              isBlog={false}
              title="Algo-Trader"
              description="This application uses advanced financial analysis to offer real-time trading prediction probabilities and a comprehensive stock market condition scanner. Utilizing HTML for a user-friendly interface and Node.js for server-side logic, applying technical analysis and sophisticated probability algorithms to forecast trading opportunities."
              ghLink="https://github.com/RyanBuss01/algo-trader"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiTrader}
              isBlog={false}
              title="AI Trader"
              description="A console based application written in javascript that uses technical analysis stock data and Machine learning principles including LSTM and RNN Nerual Networks to forecast stock prices and trading decisions."
              ghLink="https://github.com/RyanBuss01/AI-trader--Legacy-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myStreet}
              isBlog={false}
              title="My Street"
              description="This project is a mobile application built in the Flutter framwork with a Node.JS backend. It is a geo-location based social media platform that allows users to post, comment and chat with other users in realtime. Combined with complex SQL query statements and image handling with AWS S3 this application uses location services to utilize the map as a user-interface."
              ghLink="https://github.com/RyanBuss01/my-street"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={blog}
              isBlog={false}
              title="[BLOG]"
              description=""
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
