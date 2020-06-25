import React, { Component} from 'react';
import {Image} from 'react-bootstrap';

import './impAnnouncements.scss';

class ImpAnnouncements extends Component {
    render() {
        return (
            <section className="impAnnouncements-tease">
                <div className="content">
                    <div className="title">Fall 2020</div>
                    <br></br>
                    <Image src={require('./images/videoicon.JPG')} fluid />
                    <div className="description">
                        <ul>
                            <li>Due to COVID-19, all in-person meetings have been cancelled: <a href="http://www.calstatela.edu/healthwatch">Health Watch page</a></li>
                            <li>Projects, programs, and workshops are online</li>
                            <li>All communications will be done via email</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImpAnnouncements