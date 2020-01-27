import React, { Component } from 'react';

import './membership.scss';
import { Link } from 'react-router-dom';

class Membership extends Component {
    render() {
        return(
            <section className="Membership-tease">
                <div className="left">
                    <div className="content">
                        <div className="subTitle"> membership </div>
                        <div className="title"> Become a binary </div>
                        <div className="description"> Become part of Cal State LA’s largest computer science community. Members receive many benefits, including professional development, career growth and networking opportunities. </div>
                        <div className="link-btn mt-4">
                            <a className="label px-5" href="/membership">
                                join today
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

export default Membership