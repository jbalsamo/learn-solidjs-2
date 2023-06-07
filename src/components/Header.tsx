import { NavLink } from "@solidjs/router";
import { Col, Container, Nav, Navbar, Row } from "solid-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Nav>
          <Row md={12}>
            <Col md={{ span: 4, offset: 0 }}>
              <Navbar.Brand>Sharps Project Data</Navbar.Brand>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <NavLink href="/">Home</NavLink>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <NavLink href="/likedSharps"> Liked Sharps</NavLink>
            </Col>
          </Row>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
