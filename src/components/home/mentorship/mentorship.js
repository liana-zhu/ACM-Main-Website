import React, { Component } from 'react';

import './mentorship.scss';

class News extends Component {
    render() {
        return (
            <section className="Programs-tease">

                <div className="left">
                    <div className="content">
                        <div className="subTitle"> programs </div>
                        <div className="title"> Mentorship </div>
                        <div className="description">The mentorship program is a life-changing experience. Learning from a mentor, it will help students in school and prepare them for their future careers.   </div>
                        <div className="link-btn mt-4">
                            <a className="label px-5" href="/programs">
                                learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right">
                </div>
            </section>
        )
    }
}

export default News;