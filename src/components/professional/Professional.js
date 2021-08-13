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
        return (
            <div className="events-container">
                <div className="events-main">
                    <div className="events-main-text">
                        <p>Professional Development Workshops</p>
                    </div>
                    <div className="events-main-background">
                    </div>
                </div>
                <Container>
            <Row className="justify-content-md-center">
            <p className="events-header" >Upcoming Events</p>
            </Row>
                <Row className="justify-content-md-center">
                {
                    this.state.upcomingEvent &&
                    this.state.upcomingEvent.map( upcomingEvents => {
                        return (
                            <Card style={{width: '24rem', padding: '10px'}}>
                                <center>
                                    <img style={{height: '30rem', padding: '10px'}} src={upcomingEvents.imgUrl} alt="Upcoming event"/>
                                    <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                                    <Button href={upcomingEvents.link}>RSVP</Button>
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
            <p className="events-header">Semester Events</p>
            </Row>
                <Row className="justify-content-md-center">
                {
                    this.state.currentEvent &&
                    this.state.currentEvent.map( currentEvents => {
                        return (
                            <Card style={{width: '24rem', padding: '10px'}}>
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
                        <p className="events-header">Past Events</p>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/eduardo-almeida-google.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/github-workshop.PNG')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/mwd-jpl-spring-2019.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/spring-2019-resume-workshop.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/richard-fung-2018-google.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/internship.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/manny-sanchez-lockheed-spring-2019.png')} thumbnail /></div>
                        <div><Image style={{ width: '350px', height: '30rem' }} src={require('./images/linkedin-handshake-workshop.png')} thumbnail /></div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Professional;