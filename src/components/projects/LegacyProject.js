import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.css'
import "./Projects.css"

class LegacyProject extends React.Component {
    render() {
        return (
            <div>
                <br></br>
                <b>{this.props.opener} </b> <b>{this.props.description}</b><br></br><br></br>

                <h2>❖ <span className="highlight-text">What you will learn:</span></h2><br></br>
                <b><ul>
                    {this.props.technologies.map((value, index) => {
                        return <li>{value}</li>
                    })}
                </ul></b>

                <img src={require('' + this.props.poster)} className="img-fluid project-poster" alt="project poster"></img>
                <br></br><br></br><br></br>

                <h2>❖ <span className="highlight-text">Images:</span></h2>
                <div className="carousel">
                <Carousel infiniteLoop showIndicators={false}>
                    {this.props.projectImages.map((value, index) => {
                        return <div>
                            <img className='carousel-image' src={require('' + value)} alt="project slide"/>
                        </div>
                    })}
                </Carousel>
                </div>

                <h2>❖ <span className="highlight-text">Project Leaders:</span></h2>
                <div className="carousel">
                <Carousel infiniteLoop>
                    {this.props.projectLeadersImages.map((value, index) => {
                        return <div>
                            <img className='carousel-leader-image' src={require('' + value)} alt="project leader"/>
                            <p className="legend">{this.props.projectLeaders[index]}</p>
                        </div>
                    })}
                </Carousel>
                </div>

            </div>
        )
    }
}

export default LegacyProject;
