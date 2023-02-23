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
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./PastProjects.css";
class PastProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archivedProj: props.archive,
      currentYear: props.archive[0].semester,
    };
  }
  changeYear = (sem) => {
    this.setState({ currentYear: sem });
  };
  render() {
    return (
      <div>
        <Tab.Container id="archive-container" defaultActiveKey={0}>
          <DropdownButton
            title={this.state.currentYear}
            id="dropdown-button"
            menuVariant="dark"
            className="ms-2 mb-5"
          >
            {this.state.archivedProj.map((proj, index) => (
              <Dropdown.Item
                eventKey={index}
                onClick={(e) => this.changeYear(e.target.textContent)}
                className="item-dropdown"
              >
                {proj.semester}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Tab.Content>
            {this.state.archivedProj.map((proj, index) => (
              <Tab.Pane eventKey={index}>
                <Row>
                  <Col>
                    <Row>
                      <Col md={4} className="text-center">
                        <img
                          class="flyer img-fluid img-thumbnail"
                          src={proj.level.beginners.flyer}
                        />
                      </Col>
                      <Col md={8}>
                        <h3>Beginners Workshop</h3>
                        <div class="row">
                          <div class="col-md-4">
                            <h4>Skills:</h4>
                            <ul>
                              {proj.level.beginners.skills.map((skill) => (
                                <li>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          <div class="col-md-4">
                            <h4>Leaders:</h4>
                            <Carousel>
                              {proj.level.beginners.leaders.map(
                                ({ img, name }) => (
                                  <Carousel.Item>
                                    <img src={img}></img>
                                    <Carousel.Caption>
                                      <h4>{name}</h4>
                                    </Carousel.Caption>
                                  </Carousel.Item>
                                )
                              )}
                            </Carousel>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col md={4} className="order-md-2 text-center">
                        <img
                          class="flyer img-fluid img-thumbnail"
                          src={proj.level.advanced.flyer}
                        />
                      </Col>
                      <Col md={8} className="order-md-1">
                        <h3 class="text-right">Advanced Workshop</h3>
                        <div class="row">
                          <div class="col-md-4">
                            <h4>Leaders:</h4>
                            <Carousel>
                              {proj.level.advanced.leaders.map(
                                ({ img, name }) => (
                                  <Carousel.Item>
                                    <img src={img}></img>
                                    <Carousel.Caption>
                                      <h4>{name}</h4>
                                    </Carousel.Caption>
                                  </Carousel.Item>
                                )
                              )}
                            </Carousel>
                          </div>
                          <div class="col-md-4">
                            <h4>Skills:</h4>
                            <ul>
                              {proj.level.advanced.skills.map((skill) => (
                                <li>{skill}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default PastProjects;
