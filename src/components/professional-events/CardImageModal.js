import React, {useState} from 'react';
import './CardImageModal.css';
import {Button, Modal, Image,Card} from 'react-bootstrap'; 

function CardImageModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
        <Card.Img
            variant="top"
            src={require('./images/' + props.cardImage)}
            style={{height: '15rem'}}
            className="event-image"
            onClick={handleShow}/>
            {/* <Button variant="dark" size="md" className="current-events-button" onClick={handleShow}>{props.textValue}</Button> */}

        <Modal show={show} onHide={handleClose} className="events-modal">
            <Modal.Body className="events-modal-card">
                <Image src={require('./images/' + props.posterImage)} fluid />
            </Modal.Body>
            <Modal.Footer className="events-modal-card">
            
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );

}


export default CardImageModal;