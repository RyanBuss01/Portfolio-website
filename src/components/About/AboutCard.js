import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="blue">Ryan Bussert. </span>
            I was born and raised in <span className="blue">Chicago, Illinois.</span>
            <br />I am currently enrolled at Florida Gulf Coast University, where I am studying for my Bachelor's Degree in Software Engineering.
            <br />
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing in a Choir
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p>
            "Embrace the chaos of possibility!"{" "}
          </p>
          <footer className="blockquote-footer">Bussert</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
