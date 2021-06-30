import React, { useState, useContext } from "react";
import { BsHouseFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import { UserContext } from "./../context/UserContext";

const NavBar = () => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;
  const { users, loggedInUser } = userState;

  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [nameInput, setNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const handleCloseSignUp = () => {
    setShowSignUp(false);
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
  };

  const handleCloseLogIn = () => {
    setShowLogIn(false);
    setEmailInput("");
    setPasswordInput("");
  };
  const handleShowSignUp = () => setShowSignUp(true);
  const handleShowLogIn = () => setShowLogIn(true);
  const handleShowLogOut = () => userDispatch({ type: "LOG_OUT" });

  const logIn = (e) => {
    e.preventDefault();
    if (
      users &&
      users.some((u) => u.email === emailInput && u.password === passwordInput)
    ) {
      userDispatch({
        type: "LOG_IN",
        payload: { email: emailInput, password: passwordInput },
      });
    } else {
      alert("Wrong email/password");
    }
    handleCloseLogIn();
  };

  const signUp = (e) => {
    e.preventDefault();
    if (users && users.some((u) => u.email === emailInput)) {
      alert("Email already exists.");
      return;
    }
    userDispatch({
      type: "SIGN_UP",
      payload: {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        bookings: null,
      },
    });
    handleCloseSignUp();
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <h2><BsHouseFill className="mx-1" /></h2>
          BOOKING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {!loggedInUser ? (
              <>
                <Nav.Link onClick={handleShowSignUp}>Sign Up</Nav.Link>
                <Nav.Link onClick={handleShowLogIn}>Log in</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link>Hi {loggedInUser.name}! </Nav.Link>
                <Nav.Link onClick={handleShowLogOut}>
                  <FiLogOut />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showSignUp} onHide={handleCloseSignUp} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Form onSubmit={signUp}>
          <Modal.Body>
            <FloatingLabel
              controlId="name"
              label="Name"
              className="mb-3"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <FloatingLabel
              controlId="email"
              label="Email"
              className="mb-3"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSignUp}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showLogIn} onHide={handleCloseLogIn} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Form onSubmit={logIn}>
          <Modal.Body>
            <FloatingLabel
              controlId="email"
              label="Email"
              className="mb-3"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <FloatingLabel
              controlId="password"
              label="Password"
              className="mb-3"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogIn}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default NavBar;
