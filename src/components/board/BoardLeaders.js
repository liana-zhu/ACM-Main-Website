import React from 'react'
import "./board.css";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

class BoardLeaders extends React.Component {
    render() {
        return (
            <div className="col-leaders leader-background">
                <img className="image-cropper profile-pic " src={this.props.photo} alt={this.props.firstName + " " + this.props.year}></img>
                <div className="officer-info">
                    <h2>{this.props.firstName}<br />{this.props.lastName}</h2>{this.props.position}
                </div>
                <div class = "buttons">
                    <div class = "linkin">
                      {this.props.linkedin && (
						<a href={this.props.linkedin}>
						    <FontAwesomeIcon
                                className="iconBrandNav"
                                size="2x"
                                icon={faLinkedin}
                            ></FontAwesomeIcon>
						</a>
					   )}
                    </div>
                    <div class = "email">
                        {this.props.email && (
						  <a href={this.props.email}>
						    <FontAwesomeIcon
                                className="iconBrandNav"
                                size="2x"
                                icon={faEnvelope}
                            ></FontAwesomeIcon>
						  </a>
					    )}
                    </div>
                    <div class = "git">
                        {this.props.github && (
						  <a href={this.props.github}>
						    <FontAwesomeIcon
                                className="iconBrandNav"
                                size="2x"
                                icon={faGithub}
                            ></FontAwesomeIcon>
						  </a>
					    )}
                    </div>
                </div>
            </div>
        )
    }
}


export default BoardLeaders;