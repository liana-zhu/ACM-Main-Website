import React from "react";
import { DropdownButton, Dropdown, Nav, Tab, Card, Row } from "react-bootstrap";

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
      <Tab.Container id="archive-container" defaultActiveKey={0}>
        <Tab.Content className="">
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
          {this.state.archivedProj.map((proj, index) => (
            <Tab.Pane eventKey={index}>
              <Card>
                <Row>
                  <Card.Img
                    src={proj.level.beginners.flyer}
                    style={{ width: "80%", margin: "auto" }}
                    class="col-6 mt-3 img-thumbnail"
                  />
                  <Card.Body class="col-6">
                    <Card.Title>Beginners</Card.Title>
                    <Card.Text>
                      <h3>Skills Learned</h3>
                      <ul>
                        {proj.level.beginners.skills.map((skill)=>(
                          <li>{skill}</li>
                        ))}
                      </ul>

                      <h3>Leaders</h3>
                      <ul>
                        {proj.level.beginners.leaders.map(({ img, name })=>(
                          <li>
                            {name}
                          </li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Row>
              </Card>
              <Card>
                <Row>
                  <Card.Body class="col-6">
                    <Card.Title>Advanced</Card.Title>
                    <Card.Text>
                      <h3>Skills Learned</h3>
                      <ul>
                        {proj.level.advanced.skills.map((skill)=>(
                          <li>{skill}</li>
                        ))}
                      </ul>

                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    src={proj.level.advanced.flyer}
                    style={{ width: "80%", margin: "auto" }}
                    class="col-6 mt-3 img-thumbnail"
                  />
                </Row>
              </Card>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    );
  }
}

export default PastProjects;
