import React from 'react';
import './events.css';
import { Card, Button, Jumbotron, Container } from 'react-bootstrap';
import Calendar from "../calendar/Calendar.js";

// This component won't hold a state for not but decided 
// to make it into a Class component for now
class Events extends React.Component {
    test() {
        alert('Show Modal!');
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        let important_upcoming_events = <div>test</div>;
        const today = new Date()
        //Use '/' not '-' for dates to prevent issues on Firefox.
        const testDeadline = new Date("01/28/2020 23:59:59");
        const isPastDeadline = today.getTime() > testDeadline.getTime();
        if (isPastDeadline) {
            important_upcoming_events = <div><br></br><br></br></div>;
        }
        else {
            important_upcoming_events =
                <div>
                    <div className="acm-calendar">
                        <Jumbotron className="jumbo">
                            <center>
                                <h1 className="jumbo-text">Upcoming Events</h1>
                                <Card style={{ width: '19rem' }}>
                                    <Card.Img variant="top" src={require("./images/general-meeting.png")} />
                                    <Card.Body>
                                        <Card.Title>Spring First General Meeting</Card.Title>
                                        <Card.Text>
                                            If you're considering joining ACM, attending this meeting is a must.
                                </Card.Text>
                                        <Button variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScJOEpjIujT-OQSy6GHqh1U2v39qwEyLGQGG7-HT3XKp3SkQQ/viewform">
                                            Sign up here!
                                </Button>
                                        <br></br>
                                        <br></br>
                                        <Button variant="primary" href="https://drive.google.com/file/d/0B0jYb_lRRvl_QnlsWXpPYnAxVUxzdzlGN2g1eHNfcGhlZ3ZZ/view?usp=sharing">
                                            Click for QR code to sign up
                                </Button>
                                        {/* <br></br>
                                <br></br>
                                <Button onClick={this.checkIfPastDeadline}>test</Button> */}
                                    </Card.Body>
                                </Card>
                            </center>
                        </Jumbotron>
                    </div>
                    <div className="blue-line"></div>
                </div>;
        }

        // let button;
        // const openDate = this.props.openDate.split("/");
        // const mmOpen = openDate[0];
        // const ddOpen = openDate[1];
        // const yyyyOpen = openDate[2];

        // const dd = String(this.state.today.getDate()).padStart(2, '0');
        // const mm = String(this.state.today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // const yyyy = this.state.today.getFullYear();

        // const today = new Date(mm + "/" + dd + "/" + yyyy);
        // const openDeadline = new Date(mmOpen + "/" + ddOpen + "/" + yyyyOpen);
        // const diffTime = (today - openDeadline);

        // if (diffTime >= 0) {
        //     if (this.props.linkToSignUp == "") {
        //         button = <Button variant="secondary" disabled>You cannot sign up for this project at the moment.</Button>
        //     }
        //     else if (this.props.linkToSignUp == "passed") {
        //         button = <Button variant="secondary" disabled>The deadline to sign up has passed. Sorry!</Button>
        //     }
        //     else if (this.props.linkToSignUp == "notReady") {
        //         button = <Button variant="secondary" disabled>This project is not open yet.</Button>
        //     }
        //     else {
        //         button = <Button variant="success" href={this.props.linkToSignUp}>Click here to Sign Up!</Button>
        //     } 
        // }
        // else {
        //     button = <Button variant="secondary" disabled>This project will open at {this.props.openDate}.</Button>            
        // }


        return (
            <div className="events-container">
                {/* <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <Calendar /> */}

                <div>
                    {/* The class name "events-main-text" doesn't work. Changing the class name makes the code work */}
                    <div className="events-text">
                        <p>Never miss an <span className="emphasis">Event</span></p>
                    </div>
                    {/* The class name "events-main-background" doesn't work. Changing the class name makes the code work */}
                    <div className="background-image"></div>
                </div>
                <div className="blue-line"></div>

                {important_upcoming_events}

                {/* Using fluid="sm" keeps calendar centered */}
                <Container fluid="sm" className="x">
                    <div className="events-calendar-center">
                        <Calendar />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Events;