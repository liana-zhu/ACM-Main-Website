import React from 'react';
import './professional.css';
import firebase from './firebaseConfig.js'
import { Card, Button, Container, Row, Image } from 'react-bootstrap';

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
    state = {
        currentEvent: null ,
        upcomingEvent: null,
    }

    componentDidMount(){
        firebase.firestore().collection("events").get()
        .then(snapshot => {
            const events = []
            snapshot.forEach(doc => {
                const data = doc.data()
                events.push(data)
            })
            this.setState({ currentEvent: events })
        })
        .catch(error => console.log(error));

        firebase.firestore().collection("upcomingEvents").get()
        .then(snapshot => {
            const comingUpEvent = []
            snapshot.forEach(doc => {
                const data = doc.data()
                comingUpEvent.push(data)
            })
            this.setState({upcomingEvent: comingUpEvent})
        })
        .catch(error => console.log(error))
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
            <Row className="justify-content-md-center">
                <p className="past-events-header" style={{fontSize: '30px'}}>Upcoming Events</p>
            </Row>
            <center>
            {
                    this.state.upcomingEvent &&
                    this.state.upcomingEvent.map(i => {
                        return(
                            <Container>
                                <center>
                                    <img style={{height: '20rem'}} src={i.imgUrl} alt="Upcoming event"/>
                                </center>
                                <br></br>
                                <center>
                                    <Button href={i.link}>RSVP</Button>
                                </center>
                            </Container>
                        )
                    })
                }
            </center>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: .5,
                borderColor : '#ffffff',
                marginLeft: '10px',
                marginRight: '10px'
            }}/>
            <Container>
            <Row className="justify-content-md-center">
            <p className="past-events-header" style={{fontSize: '30px'}}>Fall 2020 Events</p>
            </Row>
                <Row className="justify-content-md-center">
                {
                    this.state.currentEvent &&
                    this.state.currentEvent.map( currentEvents => {
                        return (
                            <Card style={{width: '30rem', padding: '10px'}}>
                                <center>
                                    <img style={{height: '30rem', padding: '10px'}} src={currentEvents.imgUrl} alt="Current event"/>
                                </center>
                            </Card>
                        )
                    })
                }
                </Row>
            </Container>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: .5,
                borderColor : '#ffffff',
                marginLeft: '10px',
                marginRight: '10px'
            }}/>
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
                                <div><Image style={{ height: '30rem'}} src={require('./images/eduardo_almeida_google.png')} thumbnail /></div>
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
