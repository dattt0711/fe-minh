import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function NavbarCommon() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
        background: "#faf5f1",
        width: "100%",
        opacity: "0.9",
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      }}
    >
      <Navbar expand="lg my-2" >

        <Container>
          <Row style={{ width: "100%" }}>
            <Col sm={6}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="" >
                    <Link to="/" className="text-dark" style={{ textDecoration: 'none' }}>Home</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                    <Link to="/product" className="text-dark" style={{ textDecoration: 'none' }}>Products</Link>
                  </Nav.Link>
                  <Nav.Link href="">
                    <Link to="/contact" className="text-dark" style={{ textDecoration: 'none' }}>Contacts</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col sm={6} >
              <Nav className="text-end" style={{ justifyContent: 'end' }}>
                <Nav.Item>
                  <Nav.Link href="/user/info">
                    <PermIdentityIcon className="text-dark" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/product">
                    <FavoriteBorderIcon className="text-dark" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/cart">
                    <ShoppingCartIcon className="text-dark" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCommon;
