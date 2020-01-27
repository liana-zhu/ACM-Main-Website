import React from 'react'
import "./Projects.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class NewProject extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            today: new Date()
        }
    }

    render() {
        let button;
        const openDate = this.props.openDate.split("/");
        const mmOpen = openDate[0];
        const ddOpen = openDate[1];
        const yyyyOpen = openDate[2];
        
        const dd = String(this.state.today.getDate()).padStart(2, '0');
        const mm = String(this.state.today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = this.state.today.getFullYear();

        const today = new Date(mm + "/" + dd + "/" + yyyy);
        const openDeadline = new Date(mmOpen + "/" + ddOpen + "/" + yyyyOpen);
        const diffTime = (today - openDeadline);

        if (diffTime >= 0) {
            if (this.props.linkToSignUp == "") {
                button = <Button variant="secondary" disabled>You cannot sign up for this project at the moment.</Button>
            }
            else if (this.props.linkToSignUp == "passed") {
                button = <Button variant="secondary" disabled>The deadline to sign up has passed. Sorry!</Button>
            }
            else if (this.props.linkToSignUp == "notReady") {
                button = <Button variant="secondary" disabled>This project is not open yet.</Button>
            }
            else {
                button = <Button variant="success" href={this.props.linkToSignUp}>Click here to Sign Up!</Button>
            } 
        }
        else {
            button = <Button variant="secondary" disabled>This project will open at {this.props.openDate}.</Button>            
        }

        // if (this.props.isFormReady) {
        //     if (this.props.linkToSignUp == "") {
        //         button = <Button variant="secondary" disabled>You cannot sign up for this project at the moment.</Button>
        //     }
        //     else if (this.props.linkToSignUp == "passed") {
        //         button = <Button variant="secondary" disabled>The deadline to sign up has passed. Sorry!</Button>
        //     }
        //     else if (this.props.linkToSignUp == "notReady") {
        //         button = <Button variant="secondary" disabled>This project is not open yet.</Button>
        //     }
        //     else {
        //         button = <Button variant="success" href={this.props.linkToSignUp}>Click here to Sign Up!</Button>
        //     }                
        // }
        // else {
        //     button = <Button variant="secondary" disabled>This project will open at {this.props.linkToSignUp}.</Button>
        // }

        return (
            <div>
                <br></br>
                <b>{this.props.opener} </b>{this.props.description}<br></br><br></br>
                
                {button}<br></br><br></br>

                <h2>❖ <span class="highlight-text">Expected Technologies in this Project:</span></h2><br></br>
                <ul>
                    {this.props.technologies.map((value, index) => {
                        console.log({value})
                        return <li>{value}</li>
                    })}
                </ul>

                <img src={require('' + this.props.poster)} class="img-fluid project-poster"></img>                

                <h2>❖ <span class="highlight-text">Project Leaders:</span></h2>
                <div class="carousel">
                <Carousel infiniteLoop>
                    {this.props.projectLeadersImages.map((value, index) => {
                        return <div>
                            <img className='carousel-leader-image' src={require('' + value)} />
                            <p className="legend">{this.props.projectLeaders[index]}</p>
                        </div>
                    })}
                </Carousel>
                </div>
            </div>
        )
    }
}

export default NewProject