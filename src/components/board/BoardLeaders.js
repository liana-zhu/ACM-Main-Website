import React from 'react'
import "./board.css";
import 'bootstrap/dist/css/bootstrap.css'

class BoardLeaders extends React.Component {
    render() {
        return (
            <div className="col-leaders leader-background">
                <img className="image-cropper profile-pic " src={this.props.photo} alt={this.props.firstName + " " + this.props.year}></img>
                <div className="officer-info">
                    <h2>{this.props.firstName}<br />{this.props.lastName}</h2>{this.props.position}
                </div>
                {/*<div class = "buttons">
                    <div class = "linkin">
                        <a href= {this.props.linkedin}><input type="image" src="https://pecservice.nl/assets/uploads/2016/02/linkedin-icon.png" name="submit" width="35" height="35" alt="submit" id="link"/></a>
                    </div>
                    <div class = "email">
                        <a href= {this.props.email}><input type="image" src="https://www.iconpacks.net/icons/2/free-send-mail-icon-2574-thumb.png" name="submit" width="45" height="45" alt="submit" id="email"/></a>
                    </div>
                    <div class = "git">
                        <a href= {this.props.github}><input type="image" src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" name="submit" width="35" height="35" alt="submit" id="git"/></a>
                    </div>
                </div>*/}
            </div>
        )
    }
}


export default BoardLeaders;