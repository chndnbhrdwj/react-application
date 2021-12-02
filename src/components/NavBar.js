import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


export const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shresth's </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Math</Nav.Link>
                    <Nav.Link href="#multiplication">Multiplication</Nav.Link>
                    <Nav.Link href="#addition">Addition</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}