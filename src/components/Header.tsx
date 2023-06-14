import { NavLink } from "@solidjs/router";
import { Col, Container, Nav, Navbar, Row } from "solid-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Row md={12}>
          <Nav>
            <Col md={{ span: 4, offset: 0 }}>
              <Navbar.Brand>Sharps Project Data</Navbar.Brand>
            </Col>
            <Col md={{ span: 4, offset: 5 }}>
              <NavLink href="/">Home</NavLink>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <NavLink href="/favorites"> Favorites</NavLink>
            </Col>
          </Nav>
        </Row>
      </Navbar>
    </div>
  );
};

export default Header;
