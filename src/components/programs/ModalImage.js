import React from 'react'
import {Modal,Button} from 'react-bootstrap'

class ModalImage extends React.Component {
    render(){
        return (
            <Modal
            show={this.props.show}
            onHide={() => this.props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Body>
                    <img src={require("" + this.props.image)} className="img-fluid" alt="modal"></img>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalImage;
