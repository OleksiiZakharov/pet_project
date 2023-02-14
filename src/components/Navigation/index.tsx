import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLinks } from '../../routing/NavLinks';
import './navigation.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Navigation = () => {
  const { cash, login } = useSelector((state: RootState) => state.user);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-1">
      <Container>
        <Navbar.Brand>Welcome {!login ? 'Guest' : login}</Navbar.Brand>
        <div>{cash > 0 ? `Cash: ${cash}` : null}</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
