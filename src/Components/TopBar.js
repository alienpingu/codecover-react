import {Navbar,
		Nav,
		Container
} from 'react-bootstrap'

import {
  Link,
} from "react-router-dom";

import { Icon } from '@iconify/react';
import cartOutline from '@iconify/icons-mdi/cart-outline';

function TopBar() {

	return(<Navbar bg="none" variant="dark" className="fixed-top">
		    <Container>
		    <Link to="/" className="nav-brand">Logo</Link>
		    <Nav className="me-right">
		    	<div id="cartContainer">
		  			<Icon icon={cartOutline} />
		  			<span className="cart-counter">3</span>
		    	</div>
		    </Nav>
		    </Container>
		  </Navbar>)
}

export default TopBar;