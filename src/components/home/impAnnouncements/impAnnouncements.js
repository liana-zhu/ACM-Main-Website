import React, { Component } from 'react';

import './impAnnouncements.scss';

class ImpAnnouncements extends Component {
    render() {
        return (
            <section className="impAnnouncements-tease">
                <div className="content">
                    <div className="title">Attention!</div>
                    <div className="description">
                        <ul>
                            <li>Due to COVID-19, all in-person meetings have been cancelled: <a href="http://www.calstatela.edu/healthwatch">Health Watch page</a></li>
                            <li>All professional development workshops have been cancelled</li>
                            <li>If you are in the mentorship program, check your email for further details</li>
                            <li>If you are in the project workshop, check your email for further details</li>
                            <li>New Board 2020-2021: <a href="https://www.instagram.com/p/B9_BN82gNvT/">ACM Instagram page</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default ImpAnnouncements