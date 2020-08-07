import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './NavBar.css';

const useStyles = makeStyles({
	paper: {
		background: 'gray',
	},
});

function NavBar() {
	const classes = useStyles();
	const [state, setState] = useState({
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
			<h1 className='title'>Texas Archery Academy</h1>
			<React.Fragment>
				<Button onClick={toggleDrawer('right', true)}>
					<DehazeIcon  style={{ fill: 'white'}} />
				</Button>
				<Drawer
					anchor='right'
					open={state['right']}
					onClose={toggleDrawer('right', false)}
					onClick={toggleDrawer('right', false)}
					classes={{ paper: classes.paper }}>
					<Link to='/' className='nav-link'>
						HOME
					</Link>
					<Link to='/firstvisit' className='nav-link'>
						FIRST VISIT FAQ
					</Link>
					<Link to='/classes' className='nav-link'>
						CLASSES
					</Link>
					<Link to='/events' className='nav-link'>
						GROUPS & BIRTHDAYS
					</Link>
					<Link to='/locations' className='nav-link'>
						LOCATIONS
					</Link>
					<Link to='/contact' className='nav-link'>
						CONTACT US
					</Link>
				</Drawer>
			</React.Fragment>
		</div>
	);
}

export default NavBar;
