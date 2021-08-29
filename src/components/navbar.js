import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav} from 'react-bootstrap';


function Navbarmenu(){

return(
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home">Negocio Gaston Gomez</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home.js">Home</Nav.Link>
  <Nav.Link href="#features">Contacto</Nav.Link>
  <Nav.Link href="#pricing">Productos</Nav.Link>
</Nav>
</Container>
</Navbar>
)
  }
export default Navbarmenu;
