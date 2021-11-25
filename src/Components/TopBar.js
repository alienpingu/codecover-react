import {Navbar,
		Nav,
		Container
} from 'react-bootstrap'

import {
  Link,
} from "react-router-dom";

function TopBar() {

	return(<Navbar bg="none" variant="dark">
		    <Container>
		    <Link to="/" className="nav-brand">Logo</Link>
		    <Nav className="me-right">
		      <Link className="nav-link " to="/dashboard">Dashboard</Link>
		      <Link className="nav-link " to="/about">About</Link>
		    </Nav>
		    </Container>
		  </Navbar>)
}

export default TopBar;