import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CurrentProjects = (props) => {
  return (
    <Row>
      <Col md={6}>
        <Card id="beginner-card" border="secondary" className="text-center">
          <Card.Img
            variant="top"
            src={props.current.level.beginners.flyer}
            style={{ width: "80%", margin: "auto" }}
            class="mt-3 img-thumbnail"
          />
          <Card.Body>
            <Card.Title>Beginners Workshop</Card.Title>
            <Card.Text>
              Interested of making your own website portfolio? In this workshop
              series, we will be using HTML and CSS to create your very own
              portfolio, to which it could be used with resumes in the
              workforce!
            </Card.Text>
            <h3>Leaders</h3>
            <ul>

            {props.current.level.beginners.leaders.map(({ img, name }) => (
              <li>{name}</li>
            ))}
            </ul>
            <Button variant="primary" size="sm">
              More
            </Button>
            <Button
              variant="success"
              href="https://forms.gle/xw8zgCeCFaWhRPbV9"
              size="sm"
            >
              Join Now!
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card id="advance-card" border="secondary" className="text-center">
          <Card.Img
            variant="top"
            src={props.current.level.advanced.flyer}
            style={{ width: "80%", margin: "auto" }}
            class="mt-3 img-thumbnail"
          />
          <Card.Body>
            <Card.Title>Advanced Workshop</Card.Title>
            <Card.Text>
              Interested in game development? In this workshop series, we are
              using Java and Forge to create and implement a mod that will be
              used in Minecraft, one of the most played games in gaming history.
            </Card.Text>
            <h3>Leaders</h3>
            <ul>

            {props.current.level.advanced.leaders.map(({ img, name }) => (
              <li>{name}</li>
            ))}
            </ul>
            <Button variant="primary" size="sm">
              More
            </Button>
            <Button
              variant="success"
              href="https://forms.gle/xw8zgCeCFaWhRPbV9"
              size="sm"
            >
              Join Now!
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CurrentProjects;
