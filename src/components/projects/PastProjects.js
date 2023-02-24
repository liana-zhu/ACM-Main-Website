import React from "react";
import {
  DropdownButton,
  Dropdown,
  Nav,
  Tab,
  Card,
  Row,
  Col,
  Carousel,
  Container,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./PastProjects.css";
class PastProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedProj: props.archive,
      currentYear: props.archive.semester,
    };
  }
  changeYear = (sem) => {
    this.setState({ currentYear: sem });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Card
              id="beginner-card"
              border="secondary"
              className="cardbody text-center"
            >
              <div class="thefront">
                <Card.Title className="shadow mt-3">
                  Beginners Workshop
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={this.state.archivedProj.level.beginners.flyer}
                  class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
                />
                <Card.Body>
                  <Button variant="success" size="md">
                    More
                  </Button>
                </Card.Body>
              </div>
              <div class="theback">
                <Card.Title className="shadow mb-3">content</Card.Title>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Card
              id="beginner-card"
              border="secondary"
              className="cardbody text-center"
            >
              <div class="thefront">
                <Card.Title className="shadow mt-3">
                  Advanced Workshop
                </Card.Title>
                <Card.Img
                  variant="top"
                  src={this.state.archivedProj.level.advanced.flyer}
                  class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
                />
                <Card.Body>
                  <Button variant="success" size="md">
                    More
                  </Button>
                </Card.Body>
              </div>
              <div class="theback">
                <Card.Title className="shadow mb-3">content</Card.Title>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PastProjects;
