import React from 'react';
import './events.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import {Card, Button, Jumbotron, Container, Row, Col, Carousel, Image} from 'react-bootstrap';
import Calendar from "../calendar/Calendar.js";

// This component won't hold a state for not but decided 
// to make it into a Class component for now
class Events extends React.Component {
    
    constructor(props) {
        super(props);
    }

    test() {
        alert('Show Modal!');
    }

    render() {
        return(
            <div className="events-container">
                {/* <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <Calendar /> */}

                <div className="events-main">
                    <div className="events-main-text">
                        <p>Never miss an <span className="emphasis">Event</span></p>
                        <p>Stay in the loop</p>
                    </div>
                    <div className="events-main-background">
                    </div>
                </div>
                <div className="blue-line"></div>
                <Container className="current-events-container"> 
                    <Row>
                        <p className="current-events-header">Current Events</p>
                    </Row>

                    <Row>
                        
                        <Card className="current-events-card">
                            <Card.Header as="h3" className="current-card-header">Tutoring</Card.Header>
                            <Card.Body>
                                <CardImageModal cardImage="acm_tutoring_card.png" posterImage="acm_tutoring.png" />
                            
                                <Card.Text style={{marginTop:'1rem'}}>
                                Tutoring for this week which is on Thursday, September 12, 2019, 
                                will be held from 3:00 pm to 4:20 pm. The location will be King Hall 
                                D-Wing room D-4044. Courses that we will provide: <br/>
                    
                                <span className="more-details">Click image for more details</span>
                                </Card.Text>
                                <ul style={{marginTop:'1rem'}}>
                                    <li>CS 1010</li>
                                    <li>CS 2011</li>
                                    <li>CS 2012</li>
                                    <li>CS 1222</li>
                                    <li>Math 1040</li>
                                    <li>Math 2110</li>
                                </ul>
                                
                                <p className="no-rsvp">No RSVP needed</p>
                                
                                
                            </Card.Body>
                        </Card>
                        <Card className="current-events-card">
                            <Card.Header as="h3" className="current-card-header">ACM Game Night</Card.Header>
                            <Card.Body>
                                
                               
                                
                                
                                <Card.Text style={{marginTop:'1rem'}}>
                                Do you want to take a break from midterms? Are you looking to meet other fellow engineers (or students)? Are you itching for some non-technical ACM events? Well, we got your back! ACM is hosting our first ever game night. Come and join the members and leaders take a night off work with some video games, food, and fun! <br></br>
                                <br></br>
                                <b>When: </b> Friday, October 25th<br></br>
                                <b>Where: </b> E&T – 245
                                <br></br>
                                <br></br>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOD7krb1rWs0IYa-6vuaoi4ZcvvpQz47IA4M-iFG6yrRcjnQ/viewform"
                                    className="rsvp-button"
                                    style={{marginTop:'5rem'}} >RSVP HERE</a>

                                </Card.Text>
                                {/* <Button variant="dark" size="md" className="current-events-button" src={"https://docs.google.com/forms/d/e/1FAIpQLScywhcmVj_RjPPcjrS1zQHtD8tpH4L0o3X8AEcGhAnWKJ3ctQ/viewform"}>RSVP</Button> */}
                                
                            </Card.Body>
                            </Card>
                    </Row>
                    <div className="events-calendar-center">
                         <Calendar/>
                    </div>
                    </Container> 
            </div>
        );
    }
}

export default Events;