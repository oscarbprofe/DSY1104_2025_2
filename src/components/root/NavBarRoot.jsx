import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router";

export default function NavBarRoot() {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="text-white">
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className="text-white">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/productos" className="text-white">Productos</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-white" menuVariant="dark">
                            <NavDropdown.Item as={NavLink} to="/productos" className="text-white">Action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/productos/nuevo" className="text-white">Another action</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/" className="text-white">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/productos" className="text-white">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
