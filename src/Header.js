import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Router>
      <Navbar bg="primary">
        <Container>
          <Link to={"/"} className="navbar-brand text-white">
            Basic Crud App
          </Link>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Header;
