import React from "react";
import {
  DropdownButton,
  Dropdown,
  Nav,
  Tab,
  Card,
  Row,
  Col,
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
      <div id="archive-container">
        <Tab.Container  defaultActiveKey={0}>
          <DropdownButton
            title={this.state.currentYear}
            id="dropdown-button"
            menuVariant="dark"
            className="ms-2"
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
                    <Card id="beginner-card" border="secondary" className="">
                      <Row>
                        <Col md={4}>
                          <Card.Img
                            variant="top"
                            src={proj.level.beginners.flyer}
                            class="img-fluid img-thumbnail"
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <h3>Beginners Workshop</h3>
                            <h5>Skills learned</h5>
                            <ul>
                              {proj.level.beginners.skills.map((skill) => (
                                <li>{skill}</li>
                              ))}
                            </ul>
                            <Card.Text></Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col>
                    <Card id="advance-card" border="secondary" className="">
                      <Row>
                        <Col md={4} className="img-fluid">
                          <Card.Img
                            variant="top"
                            src={proj.level.advanced.flyer}
                            class="img-fluid img-thumbnail"
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <h3>Advanced Workshop</h3>
                            <h5>Skills learned</h5>
                            <ul>
                              {proj.level.advanced.skills.map((skill) => (
                                <li>{skill}</li>
                              ))}
                            </ul>
                            <Card.Text></Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
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
