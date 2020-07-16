import React, { Component} from 'react';

import './impAnnouncements.scss';

class ImpAnnouncements extends Component {
    render() {
        return (
            <section className="impAnnouncements-tease">
                <div className="content">
                    <div className="title">Fall 2020</div>
                    <br></br>
                    <iframe title="intro video" width="560" height="315" src="https://www.youtube.com/embed/U2O4-rS0zYA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="description">
                        <ul>
                            <li>Due to COVID-19, all in-person meetings have been cancelled: <a href="http://www.calstatela.edu/healthwatch">Health Watch page</a></li>
                            <li>Projects, mentorship sessions, and workshops are online</li>
                            <li>All communications will be done via email</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImpAnnouncements