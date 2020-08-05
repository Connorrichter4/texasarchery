import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	return (
		<div className='header'>
            <h1>Texas Archery Academy</h1>
			<React.Fragment>
				<Button onClick={toggleDrawer('right', true)}>
					<DehazeIcon fontSize='large' />
				</Button>
				<Drawer
					anchor='right'
					open={state['right']}
					onClose={toggleDrawer('right', false)}
					onClick={toggleDrawer('right', false)}>
					<Link to='/'>HOME</Link>
					<Link to='/firstvisit'>FIRST VISIT FAQ</Link>
					<Link to='/classes'>CLASSES</Link>
					<Link to='/events'>GROUPS & BIRTHDAYS</Link>
					<Link to='/locations'>LOCATIONS</Link>
					<Link to='/contact'>CONTACT US</Link>
				</Drawer>
			</React.Fragment>
		</div>
	);
}

export default NavBar;
