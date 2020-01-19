import React, { Component } from 'react';

import './aboutus.scss';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return(
            <section className="AboutUs-tease">
                <div className="left">
                    <div className="content">
                        <div className="subTitle"> acm@calstatela </div>
                        <div className="title"> Who are we? </div>
                        <div className="description"> We’re a chapter of Association for Computing Machinery at California State University, Los Angeles. An organization to bring students with common passion and devotion to the field of computing. </div>
                        <div className="link-btn mt-4">
                            <Link className="label px-5" to="/aboutus">
                                learn more
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

export default AboutUs