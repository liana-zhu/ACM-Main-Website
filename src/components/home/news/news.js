import React, { Component } from 'react';

import './news.scss';
import { Link } from 'react-router-dom';

class News extends Component {
    render() {
        return(
            <section className="News-tease">
                <div className="left">
                </div>
                <div className="right">
                    <div className="content">
                        <div className="subTitle"> news </div>
                        <div className="title"> What's Happening </div>
                        <div className="description"> You can also add our orgainziaion calender to your personal calender so you won’t ever miss an upcoming event.  </div>
                        <div className="link-btn mt-4">
                            <Link className="label px-5" to="/events">
                                learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default News