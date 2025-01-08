import React, { useState } from "react";
import { Modal, Button, Image, Container, Row, Col } from "react-bootstrap";
import qrCode from "../assets/qrcode.png";

const GetTheApp =()=>{
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
  
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <>Download the app and book your ride</>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <p>
                  <ul>
                    <li>
                      Scan the QR code to download the Zoomcar App from the Play
                      Store/App Store.
                    </li>
                    <li>
                      Alternatively, use the links below to open the Play Store or
                      App Store for the Zoomcar App.
                    </li>
                  </ul>
                </p>
              </Col>
            </Row>
            <Row className="text-center my-3">
              <Col>
                <Image
                  src={qrCode}
                  alt="QR Code"
                  rounded
                  style={{ width: "150px", height: "150px" }}
                /> 
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default GetTheApp