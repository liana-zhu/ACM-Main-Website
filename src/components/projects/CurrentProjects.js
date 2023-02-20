import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CurrentProjects = (props) => {
  return (
    <Row>
      <Col md={6}>
        <Card border="secondary" bg="">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card border="secondary">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CurrentProjects;
