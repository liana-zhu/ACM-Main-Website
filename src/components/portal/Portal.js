import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./portal.css";
import "bootstrap/dist/css/bootstrap.css";

class Portal extends React.Component {
    render() {
        return (
            <div>
                <div className="body container">
                    <div className="portal-description">
                        <Jumbotron>
                        <h1>ACM Portal</h1>
                        <p>
                            The ACM Portal is still a beta test. It allows members to view upcoming events. They will be able to earn points by participating in ACM events and other activities. 
                            Many of the portal features are still under development. Feel free to sign up if you are interested.
                            </p>
                        <p>
                            <Button variant="primary" href="https://calstatelaacm-portal.web.app/#/">Sign up</Button>
                        </p>
                    </Jumbotron>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portal;
