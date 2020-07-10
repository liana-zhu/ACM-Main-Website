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
                <b>{this.props.opener} </b>{this.props.description}<br></br><br></br>

                <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                <ul>
                    {this.props.technologies.map((value, index) => {
                        return <li>{value}</li>
                    })}
                </ul>

                <img src={require('' + this.props.poster)} class="img-fluid project-poster" alt="project poster"></img>
                <br></br><br></br><br></br>
                
                <h2>❖ <span class="highlight-text">Images:</span></h2>
                <div class="carousel">
                <Carousel infiniteLoop showIndicators={false}>
                    {this.props.projectImages.map((value, index) => {
                        return <div>
                            <img className='carousel-image' src={require('' + value)} alt="project slide"/>
                        </div>
                    })}
                </Carousel>                
                </div>

                <h2>❖ <span class="highlight-text">Project Leaders:</span></h2>
                <div class="carousel">
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

export default LegacyProject