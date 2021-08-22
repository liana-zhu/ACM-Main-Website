import React, { Component} from 'react';
import firebase from '../../professional/firebaseConfig.js';
import { Card, Button, Row } from 'react-bootstrap';

import './impAnnouncements.scss';

class ImpAnnouncements extends Component {
    state ={
        upcomingEvent: null,
    }

    componentDidMount(){
        firebase.firestore().collection("upcomingEvents").get()
        .then(snapshot => {
            const events = []
            snapshot.forEach(doc => {
                const data = doc.data()
                events.push(data)
            })
            this.setState({upcomingEvent : events})
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="impAnnouncements-tease">
                <div className="content">
                    <div className="title">Academic Year 2021-2022</div>
                    <iframe title="intro video" width="560" height="315" src="https://www.youtube.com/embed/AjZGlE6PiG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="description">
                        <ul>
                            <li>Due to COVID-19, most events will be hosted virtually</li>
                            <li>Projects, mentorship sessions, and workshops are online</li>
                            <li>All communications will be done via email</li>
                        </ul>
                    </div>
                    <Row className="justify-content-md-center title">upcoming Events</Row>
                    <Row className="justify-content-md-center">
                        {
                            this.state.upcomingEvent &&
                            this.state.upcomingEvent.map( upcomingEvents => {
                                return (
                                    <Card style={{width: '24rem', padding: '10px'}}>
                                        <center>
                                            <img style={{height: '30rem', padding: '10px'}} src={upcomingEvents.imgUrl} alt="Upcoming event"/>
                                            <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                                            <p>Sign up Deadline: {upcomingEvents.deadline}</p>
                                            <Button href={upcomingEvents.link} style={{backgroundColor: '#0A84FF'}}>RSVP</Button>
                                        </center>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                </div>
            </section>
        )
    }
}

export default ImpAnnouncements;