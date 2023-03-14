import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar className="navb">
      <Container fluid>
        <Navbar.Brand>
          <a href="https://www.apple.com/" title="Ceci est un lien image HTML">
            <img
              src="../assets/Apple-Icone.png"
              href="https://www.apple.com/"
              alt="logo apple"
              height="70"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/"> ACCUEIL</Nav.Link>
            <Nav.Link href="#action2">A PROPOS</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Accessoires</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Produits</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Autres</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-4"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
