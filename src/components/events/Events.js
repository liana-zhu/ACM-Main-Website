import React from 'react';
import './events.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import {Card, Button, Jumbotron, Container, Row, Col, Carousel, Image} from 'react-bootstrap';

import Calendar from '../calendar/Calendar';

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

                <div className="acm-calendar">
                    <Jumbotron className="jumbo">
                        <h1 className="jumbo-text">View Events on Google Calendar...</h1>

                        <a href="https://calendar.google.com/calendar/embed?src=acm.calstatela%40gmail.com&ctz=America%2FLos_Angeles"><Button variant="primary" size="lg" className="calendar-button">ACM Calendar</Button></a>
                    </Jumbotron>
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
                            <Card.Header as="h3" className="current-card-header">Resume Workshop</Card.Header>
                            <Card.Body>
                                
                                <CardImageModal cardImage="resume_workshop_card.png" posterImage="resume_workshop.png" />
                                
                                
                                <Card.Text style={{marginTop:'1rem'}}>
                                The resume workshop is meant to prepare students for the 
                                internships career fair on September 19, 2019. This is a 
                                great opportunity for those who don’t have a resume to receive 
                                help on how to start creating one. If you have one this workshop 
                                will help you improve your resume. <br/>
                                <span className="more-details">Click image for more details</span>

                                </Card.Text>
                                
                                <div className="rsvp-container">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScywhcmVj_RjPPcjrS1zQHtD8tpH4L0o3X8AEcGhAnWKJ3ctQ/viewform"
                                        className="rsvp-button"
                                        style={{marginTop:'5rem'}} >RSVP</a>
                                </div>
                                
                                    
                                {/* <Button variant="dark" size="md" className="current-events-button" src={"https://docs.google.com/forms/d/e/1FAIpQLScywhcmVj_RjPPcjrS1zQHtD8tpH4L0o3X8AEcGhAnWKJ3ctQ/viewform"}>RSVP</Button> */}
                                
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
                
                <Container className="upcoming-container">
                    <Row>
                        <p className="upcoming-main">Upcoming...</p>
                    </Row>

                    <Row className="events-card-row">
                        <Col className="events-col">
                            <Card style={{ width: '18rem' }} className="events-card">
                                <Card.Img variant="top" src={require('./images/joker_card.png')} className="img-border" style={{height: '9rem'}}/>
                                <Card.Body>
                                    <Card.Title className="emphasis" style={{marginBottom: ".3em"}}>Joker Fundraiser<br/><span className="card-date">10/4/19</span></Card.Title>

                                    <div className="card-sub">
                                        <Card.Text className="card-sub-description">
                                        We are having a Movie Fundraiser on October 4th. The movie we are premiering is Joker. 
                                        </Card.Text>

                                        <CurrentEventsModal imageName="joker.png" textValue="View"/>
                                        {/* <Button variant="dark" className="card-sub-button">View</Button> */}
                                    </div>
                                    <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSf9FmZmVkrkZPSdWAzYCySDU2kUStPoQB0PKK1g4fLqKOMvGw/viewform"
                                            className="joker-purchase"
                                            style={{marginTop:'5rem'}}>Purchase</a>
                                            {/* <CurrentEventsModal imageName="joker.png" textValue="View"/> */}
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="events-col">
                            <Card style={{ width: '18rem' }} className="events-card">
                                <Card.Img variant="top" src={require('./images/internship_card.png')} className="img-border" style={{height: '9rem'}}/>
                                <Card.Body>
                                    
                                    <Card.Title className="emphasis" style={{marginBottom: ".3em"}}>Internship Workshop <br/><span className="card-date">10/3/19</span></Card.Title>
                                    <div className="card-sub">
                                        <Card.Text className="card-sub-description">
                                        The Internship Fair coming up.
                                        So if you have not prepared your resume what are you waiting for and 
                                        come join our resume workshop.
                                        </Card.Text>
                                        {/* <Button variant="dark" className="card-sub-button">View</Button> */}
                                        <CurrentEventsModal imageName="internship.png" textValue="View"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="events-col">
                            <Card style={{ width: '18rem' }} className="events-card">
                                <Card.Img variant="top" src={require('./images/pizza_and_boba_card.png')} className="img-border" style={{height: '9rem'}}/>
                                <Card.Body>
                                    <Card.Title className="emphasis" style={{marginBottom: ".3em"}}>Pizza & Boba<br/><span className="card-date">10/3/19</span></Card.Title>

                                    <div className="card-sub">
                                        <Card.Text className="card-sub-description">
                                        On October 3rd, a Thursday we will be hosting a boba & pizza fundraiser so come and support us in King Hall. 
                                        </Card.Text>
                                        
                                        <CurrentEventsModal imageName="pizza_and_boba.png" textValue="View"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                    
                </Container>

                
                <p className="past-events-header">Past Events</p>
                <div className="past-container">
                    
                    <Carousel className="past-events-carousel">
                        <Carousel.Item className="past-events-carousel">
                            <div className="carousel-image">
                                <Image style={{height: '30rem', marginRight:'1rem'}} src={require('./images/awards_ceremony.png')} thumbnail />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-image">
                                <Image style={{height: '30rem'}} src={require('./images/upperclassmen_workshop.png')} thumbnail />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-image">
                                <Image style={{height: '30rem'}} src={require('./images/Hackathon.png')} thumbnail />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-image">
                                <Image style={{height: '30rem'}} src={require('./images/venom.png')} thumbnail />
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-image">
                                <Image style={{height: '30rem'}} src={require('./images/intro_web_workshop.png')} thumbnail />
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
                
            </div>
        );
    }
}

export default Events;