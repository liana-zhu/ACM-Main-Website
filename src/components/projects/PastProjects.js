import React from "react";
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
import "./PastProjects.css";
class PastProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedProj: props.archive,
      currentYear: props.archive.semester,

      //These states are for the "more" button
      begInfoButton: "More",
      advInfoButton: "More",
      begOpen: false,
      advOpen: false,
    };
  }
  changeYear = (sem) => {
    this.setState({ currentYear: sem });
  };

  infoButtonHandler = (projType) => {
    if (projType === "beg") {
      this.setState({ begOpen: !this.state.begOpen });
      if (this.setState.begOpen) {
        this.setState({ begInfoButton: "More" });
      } else {
        this.setState({ begInfoButton: "Less" });
      }
    } else {
      this.setState({ advOpen: !this.state.advOpen });
      if (this.state.advOpen) {
        this.setState({ advInfoButton: "More" });
      } else {
        this.setState({ advInfoButton: "Less" });
      }
    }
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Card border="secondary" className="archive-card text-center">
              <Card.Img
                variant="top"
                src={this.state.archivedProj.level.beginners.flyer}
                class="archive-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
              />
              <Card.Body>
                <Card.Title className="shadow mb-3">
                  Beginners Workshop
                </Card.Title>
                <Card.Text>
                  Interested of making your own website portfolio? In this
                  workshop series, we will be using HTML and CSS to create your
                  very own portfolio, to which it could be used with resumes in
                  the workforce!
                  <Collapse in={this.state.begOpen}>
                    <div>
                      <div class="skills-section my-4">
                        <h4 class="skill-header">You will learn:</h4>
                        {this.state.archivedProj.level.beginners.skills.map(
                          (skill) => (
                            <div>
                              <Icon.CaretRightFill className="d-inline" />
                              <span>{skill}</span>
                              <Icon.CaretLeftFill className="d-inline" />
                            </div>
                          )
                        )}
                      </div>
                      <div class="leaders-section">
                        <h4 class="leaders-header">Leaders:</h4>
                        <Carousel class="leader-carousel">
                          {this.state.archivedProj.level.beginners.leaders.map(
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
                    </div>
                  </Collapse>
                </Card.Text>
                <Button
                  onClick={(e) => this.infoButtonHandler(e.target.value)}
                  aria-expanded={this.state.begOpen}
                  variant="primary"
                  size="sm"
                  value={"beg"}
                >
                  {this.state.begInfoButton}
                </Button>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card border="secondary" className="text-center">
              <Card.Img
                variant="top"
                src={this.state.archivedProj.level.advanced.flyer}
                class="archive-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
              />
              <Card.Body>
                <Card.Title className="shadow mb-3">
                  Advanced Workshop
                </Card.Title>
                <Card.Text>
                  Interested in game development? In this workshop series, we
                  are using Java and Forge to create and implement a mod that
                  will be used in Minecraft, one of the most played games in
                  gaming history.
                  <Collapse in={this.state.advOpen}>
                    <div>
                      <div class="skills-section my-4">
                        <h4 class="skill-header">You will learn:</h4>
                        {this.state.archivedProj.level.advanced.skills.map(
                          (skill) => (
                            <div>
                              <Icon.CaretRightFill className="d-inline" />
                              <span>{skill}</span>
                              <Icon.CaretLeftFill className="d-inline" />
                            </div>
                          )
                        )}
                      </div>
                      <div class="leaders-section">
                        <h4 class="leaders-header">Leaders:</h4>
                        <Carousel>
                          {this.state.archivedProj.level.advanced.leaders.map(
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
                    </div>
                  </Collapse>
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={(e) => this.infoButtonHandler(e.target.value)}
                  aria-expanded={this.state.advOpen}
                  value={"adv"}
                  className="shadow"
                >
                  {this.state.advInfoButton}
                </Button>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PastProjects;
