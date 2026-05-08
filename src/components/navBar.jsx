import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./style.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="custom-navbar py-3"
      sticky="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="brand-logo">
          Marble & Tiles
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        {/* Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links text-center">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>

            {/* <Nav.Link
              href="#about"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link> */}

            <Nav.Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();

                setExpanded(false);

                setTimeout(() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 350);
              }}
            >
              About Us
            </Nav.Link>

            <Nav.Link href="#collection" onClick={() => setExpanded(false)}>
              Collection
            </Nav.Link>

            <Nav.Link href="#products" onClick={() => setExpanded(false)}>
              Products
            </Nav.Link>

            <Nav.Link href="#gallery" onClick={() => setExpanded(false)}>
              Gallery
            </Nav.Link>

            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>

          {/* Button */}
          <div className="quote-btn-wrapper text-center">
            <Button className="quote-btn">GET A QUOTE</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
