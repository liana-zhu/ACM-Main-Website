import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Collapse,
  Container,
  Carousel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./currentprojects.css";

const CurrentProjects = (props) => {
  const [begOpen, setBegOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card
            border="secondary"
            className="cardbody current-card text-center"
            style={{ transform: begOpen ? "rotateY(180deg)" : "none" }}
          >
            <div class="thefront">
              <Card.Title className="shadow mt-3">
                Beginners Workshop
              </Card.Title>
              <Card.Img
                variant="top"
                src={props.current.level.beginners.flyer}
                class="current-flyer img-thumbnail shadow-lg mb-2 bg-white rounded"
              />
              <Card.Body>
                <Card.Text className="current-desc">
                  Interested of making your own website portfolio? In this
                  workshop series, we will be using HTML and CSS to create your
                  very own portfolio, to which it could be used with resumes in
                  the workforce!
                </Card.Text>
                <Button
                  variant="success"
                  size="md"
                  onClick={() => setBegOpen(!begOpen)}
                >
                  More info
                </Button>
                <Button
                  variant="success"
                  href="https://forms.gle/xw8zgCeCFaWhRPbV9"
                  size="sm"
                >
                  Join Now!
                </Button>
              </Card.Body>
            </div>
            <div class="theback">
              <div class="skills-section my-4">
                <h4 class="skill-header">You will learn:</h4>
                {props.current.level.beginners.skills.map((skill) => (
                  <div>
                    <Icon.CaretRightFill className="d-inline" />
                    <span>{skill}</span>
                    <Icon.CaretLeftFill className="d-inline" />
                  </div>
                ))}
              </div>
              <div class="leaders-section">
                <h4 class="leaders-header">Leaders:</h4>
                <Carousel>
                  {props.current.level.beginners.leaders.map(
                    ({ img, name }) => (
                      <Carousel.Item>
                        <img src={img}></img>
                        <Carousel.Caption>
                          <h4 class="leadername">{name}</h4>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                  )}
                </Carousel>
              </div>
              <div class="photos-section">
                <h4 class="leaders-header">Photos:</h4>
                <Carousel className="photos-carousel">
                  {props.current.level.beginners.photos.map((photo) => (
                    <Carousel.Item>
                      <img src={photo}></img>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <Card.Footer>
                <Button
                  variant="success"
                  size="md"
                  onClick={() => setBegOpen(!begOpen)}
                >
                  back
                </Button>
              </Card.Footer>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            border="secondary"
            className="cardbody current-card text-center"
            style={{ transform: advOpen ? "rotateY(180deg)" : "none" }}
          >
            <div class="thefront">
              <Card.Title className="shadow mt-3">Advanced Workshop</Card.Title>
              <Card.Img
                variant="top"
                src={props.current.level.advanced.flyer}
                class="current-flyer img-thumbnail shadow-lg mb-2 bg-white rounded"
              />
              <Card.Body>
                <Card.Text className="current-desc">
                  Interested in game development? In this workshop series, we
                  are using Java and Forge to create and implement a mod that
                  will be used in Minecraft, one of the most played games in
                  gaming history.
                </Card.Text>
                <Button
                  variant="success"
                  size="md"
                  onClick={() => setAdvOpen(!advOpen)}
                >
                  More info
                </Button>
                <Button
                  variant="success"
                  href="https://forms.gle/xw8zgCeCFaWhRPbV9"
                  size="sm"
                >
                  Join Now!
                </Button>
              </Card.Body>
            </div>
            <div class="theback">
              <div class="skills-section my-4">
                <h4 class="skill-header">You will learn:</h4>
                {props.current.level.advanced.skills.map((skill) => (
                  <div>
                    <Icon.CaretRightFill className="d-inline" />
                    <span>{skill}</span>
                    <Icon.CaretLeftFill className="d-inline" />
                  </div>
                ))}
              </div>
              <div class="leaders-section">
                <h4 class="leaders-header">Leaders:</h4>
                <Carousel className="mb-5">
                  {props.current.level.advanced.leaders.map(({ img, name }) => (
                    <Carousel.Item>
                      <img src={img}></img>
                      <Carousel.Caption>
                        <h4 class="leadername">{name}</h4>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div class="photos-section">
                <h4 class="leaders-header">Photos:</h4>
                <Carousel className="photos-carousel">
                  {props.current.level.advanced.photos.map((photo) => (
                    <Carousel.Item>
                      <img src={photo}></img>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <Card.Footer>
                <Button
                  variant="success"
                  size="md"
                  onClick={() => setAdvOpen(!advOpen)}
                >
                  back
                </Button>
              </Card.Footer>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentProjects;
