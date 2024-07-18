import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigate = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Film</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Horreur</Nav.Link>
          <Nav.Link href="#features">Action</Nav.Link>
          <Nav.Link href="#pricing">Science-fiction</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigate;
