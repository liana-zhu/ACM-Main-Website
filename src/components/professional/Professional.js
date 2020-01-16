import React from 'react';
import './professional.css';
import CurrentEventsModal from './CurrentEventsModal';
import CardImageModal from './CardImageModal';
import { Card, Button, Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';

/*
To install, go to project directory and run this on command line:
$ npm install react-multi-carousel --save
*/
//Imports for multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        //const responsive is used for multi carousel
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 4, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
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
                        <Col sm><Image src={require('./images/internship.png')} thumbnail /></Col>
                        <Col sm><Image src={require('./images/resume_workshop.png')} thumbnail /></Col>
                        <Col sm><Image src={require('./images/pizza_and_boba.png')} thumbnail /></Col>
                        <Col sm><Image src={require('./images/joker.png')} thumbnail /></Col>
                    </Row>
                </Container>
                <div className="gray-line"></div>
                <Container>
                    <Row className="justify-content-md-center">
                        <p className="past-events-header">Past Events</p>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div className="past-container">
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                //showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                //autoPlaySpeed={5000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px">
                                <div><Image style={{ height: '30rem', marginRight: '1rem' }} src={require('./images/eduardo_almeida_google.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/github_workshop.PNG')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/mwd_jpl_spring_2019.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/spring_2019_resume_workshop.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/richard_fung_2018_google.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/internship.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/manny_sanchez_lockheed_spring_2019.png')} thumbnail /></div>
                                <div><Image style={{ height: '30rem' }} src={require('./images/linkedin_handshake_workshop.png')} thumbnail /></div>
                            </Carousel><p id="semicolon" /* Semicolon is required for Carousel*/>;</p>

                        </div>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Professional;
