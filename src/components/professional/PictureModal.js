import React, { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import "./PictureModal.css";

function PictureModal(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgPath = prop.img;
  console.log(`file: PictureModal.js ~ line 34 ~ imgPath`, imgPath);
  console.log(typeof imgPath === "string");

  return (
    <div className="img-container">
      {/* <img
        onClick={handleShow}
        //src={require("./images/placeholder-1.jpg")}
        style={{ width: "30rem", height: "30rem" }}
        src={require(imgPath)}
        alt="place1"
        data-original="p1-full.jpg"
      /> */}
      <div className="img-container">
        <img
          onClick={handleShow}
          src={require("./images/placeholder-3.jpg")}
          style={{ width: "30rem", height: "30rem" }}
          alt="place3"
          data-original="p3-full.jpg"
        />
        <p className="image-description">Game Night 2021(img we are working on)</p>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="picture-modal-container"
      >
        <Modal.Header
          className="picture-modal-header"
          closeButton
        ></Modal.Header>
        <Modal.Body className="picture-modal-card">
          <p>hello</p>
          <Image
            src={require("./images/placeholder-3.jpg")}
            //onClick={handleShow}
            //className="img-fluid hover-shadow picture"
            className="picture"
          ></Image>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PictureModal;
