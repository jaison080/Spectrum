import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function  HeaderBar(){
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
            Spectrum
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}

export default HeaderBar;
