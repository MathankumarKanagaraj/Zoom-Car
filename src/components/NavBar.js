import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarButton from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import navLogo from "../assets/navLogo.png";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profileShow, setProfileShow] = useState(false);

  const handleProfileClose = () => setProfileShow(false);
  const handleProfileShow = () => setProfileShow(true);

  return (
    <Container fluid style={{ backgroundColor: "#ffffff", height: "65px" }}>
      <Row>
        <Col className="mt-2 ms-3">
          <span onClick={handleShow}>
            {" "}
            {
              <Icon
                icon="el:lines"
                style={{
                  height: "15px",
                  width: "24px",
                  cursor: "pointer",
                  backgroundSize: "24px",
                  backgroundColor: "white",
                  color: "gray",
                }}
                className="me-4"
              />
            }
            <img src={navLogo} className="mt-1" />
          </span>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Body>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-house me-2"></i>
                  <a
                    href="/become-a-host"
                    className="text-decoration-none text-black"
                  >
                    <img src={navLogo} className=" me-3" />
                  </a>
                  <li className="mb-3">
                    <a href="/" className="text-decoration-none text-black">
                      <Icon
                        icon="mdi:account-circle-outline"
                        className="fs-3 me-3"
                      />
                      <span>Login or Signup</span>
                    </a>
                  </li>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col className="mt-2 text-end">
          <Link
            to="/inves"
            style={{ textDecoration: "none", color: "black", height: "50px" }}
            className="fw-lighter me-4"
          >
            Investor Relations
          </Link>

          <CarButton
            label="Become a Host"
            className="rounded-pill me-4 fw-lighter border"
            onClick={() => navigate("/behost")}
            variant={"white"}
            style={{ height: "50px" }}
          />
          <CarButton
            label={
              <>
                <div className=" ">Get the App</div>
              </>
            }
            onClick={() => navigate("/getapp")}
            className="rounded-pill me-4 fw-lighter border"
            variant={"white"}
            style={{ height: "50px" }}
          />
          <CarButton
            label={
              <>
                <Icon
                  icon="gg:profile"
                  width="24"
                  height="24"
                  className="me-2"
                />
                Profile
              </>
            }
            className="rounded-pill me-4 fw-lighter border"
            onClick={handleProfileShow}
            variant={"white"}
            style={{ height: "50px" }}
          />

          <Offcanvas
            show={profileShow}
            onHide={handleProfileClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h5>User Information</h5>
              <p>
                <strong>Name:</strong>
              </p>
              <p>
                <strong>Email:</strong>
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
