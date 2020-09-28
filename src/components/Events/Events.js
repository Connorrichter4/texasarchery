import React, {useEffect} from 'react';
import './Events.css';

import Tournament from './Tournaments';
import Birthdays from './Birthdays';
import Groups from './Groups';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Events() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='event-container'>
			<h2 className='page-title'>Events</h2>
			<DropdownButton title='Select Event' variant='' className='dropdown'>
				<Dropdown.Item href='#tournament'>Tournaments</Dropdown.Item>
				<Dropdown.Item href='#birthdays'>Birthdays</Dropdown.Item>
				<Dropdown.Item href='#groups'>Groups</Dropdown.Item>
			</DropdownButton>
			<Tournament />
			<Birthdays />
			<Groups />
		</div>
	);
}

export default Events;
