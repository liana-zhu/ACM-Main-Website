import React, { Component } from 'react';

import './projects.scss';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <section className="Projects-tease">
                <div className="left">
                    <div className="content">
                        <div className="subTitle"> projects </div>
                        <div className="title"> We are Hackers </div>
                        <div className="description"> Our chapter is a project-based organization, where we experiment with industry technology trends.   </div>
                        <div className="link-btn mt-4">
                            <Link className="label px-5" to="/projects">
                                what's hacking?
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="right">

                </div>
            </section>
        )
    }
}

export default Projects