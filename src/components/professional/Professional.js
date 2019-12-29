import React from 'react';
import './professional.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import { Card, Button, Jumbotron, Container, Row, Col, Carousel, Image } from 'react-bootstrap';

// This component won't hold a state for not but decided
// to make it into a Class component for now
class Professional extends React.Component {

    constructor(props) {
        super(props);
    }

    test() {
        alert('Show Modal!');
    }

    render() {
        return (
            <div className="events-container">
                {/* <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <Calendar /> */}

                <div className="events-main">
                    <div className="events-main-text">
                        <p>Professional Development Workshops</p>
                    </div>
                    <div className="events-main-background">
                    </div>
                </div>

                <Container className="todays-events-container">
                    <Row className="justify-content-md-center">
                        <p className="todays-events-header">Today's Event</p>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Image style={{ height: '30rem', marginRight: '1rem' }} src={require('./images/awards_ceremony.png')} thumbnail />
                    </Row>
                </Container>
                <div className="gray-line"></div>
                <Container className="current-events-container">
                    <Row className="justify-content-md-center">
                        <p className="current-events-header">Events for this week</p>
                    </Row>

                    <Row className="current-events-images">
                        <Col><Image src={require('./images/internship.png')} fluid /></Col>
                        <Col><Image src={require('./images/resume_workshop.png')} fluid /></Col>
                        <Col><Image src={require('./images/pizza_and_boba.png')} fluid /></Col>
                        <Col><Image src={require('./images/joker.png')} fluid /></Col>
                    </Row>
                </Container>
                <div className="gray-line"></div>
                <Container>
                    <Row className="justify-content-md-center">
                        <p className="past-events-header">Past Events</p>
                    </Row>
                    <Row className="justify-content-md-center">
                    <div className="past-container">
                        <Carousel className="past-events-carousel">
                            <Carousel.Item className="past-events-carousel">
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem', marginRight: '1rem' }} src={require('./images/awards_ceremony.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem' }} src={require('./images/upperclassmen_workshop.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem' }} src={require('./images/Hackathon.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem' }} src={require('./images/venom.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem' }} src={require('./images/intro_web_workshop.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="carousel-image">
                                    <Image style={{ height: '30rem' }} src={require('./images/joker.png')} thumbnail />
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Professional;
