import React, {Component} from "react";

import Carousel from '../headercarousel/HeaderCarousel';
import AboutUs from './aboutus/aboutus';
import Project from './projects/projects';
import News from './news/news';
import Membership from './membership/membership'

class Home extends Component {
    render() {
        return(
            <section className="homeWrapper">
                <Carousel/>
                <AboutUs/>
                <Project/>
                <News/>
                <Membership/>
            </section>
        )
    }
}

export default Home;