import React from "react";
import { DropdownButton, Dropdown, Nav, Tab, Card } from "react-bootstrap";

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
        <Tab.Content className="project-tab-content">
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
                <Card.Img
                  variant="top"
                  src={proj.level.beginners.flyer}
                  style={{ width: "80%", margin: "auto" }}
                  class="mt-3 img-thumbnail"
                />
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={proj.level.advanced.flyer}
                  style={{ width: "80%", margin: "auto" }}
                  class="mt-3 img-thumbnail"
                />
              </Card>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    );
  }
}

export default PastProjects;
