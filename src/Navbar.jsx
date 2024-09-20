import "./Navbar.css";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar className="navbar" bg="myDark" variant="dark" expand="sm">
        <Navbar.Brand className="brand" href="/">
          <img
            className="logoimg"
            src="./tinynest.png"
            width="35px"
            height="35px"
          />
          Recipe Nest
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="Recipes">Recipes</Nav.Link>
            <Nav.Link href="Add">Add</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="signin" href="Signin">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">this is the content</div>
    </>
  );
}

export default NavigationBar;
