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
                    <div className="title">Academic Year 2020-2021</div>
                    <br></br>
                    {/*<iframe title="intro video" width="560" height="315" src="https://www.youtube.com/embed/yfbfm_L74Do" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/}
                    <div className="description">
                        <ul>
                            <li>Due to COVID-19, all in-person meetings have been cancelled: <a href="http://www.calstatela.edu/healthwatch">Health Watch page</a></li>
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
                                    <Card style={{width: '30rem', padding: '10px'}}>
                                        <center>
                                            <img style={{height: '30rem', padding: '10px'}} src={upcomingEvents.imgUrl} alt="Upcoming event"/>
                                            <p>Sign up starts: {upcomingEvents.signUpStart}</p>
                                            {/* <div className="link-btn mt-4" style={{backgroundColor: '#0A84FF'}}>
                                                <a className="label px-5" href={upcomingEvents.link}>
                                                    RSVP
                                                </a>
                                            </div> */}
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