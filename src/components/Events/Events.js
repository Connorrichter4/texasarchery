import React from 'react';
import './Events.css';

import Tournament from './Tournaments';
import Birthdays from './Birthdays';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Events() {
	return (
		<div className='event-container'>
			<DropdownButton title='Select Event' variant=''>
				<Dropdown.Item href='#tournament'>Tournaments</Dropdown.Item>
				<Dropdown.Item href='#birthdays'>Birthdays</Dropdown.Item>
				<Dropdown.Item href='#groups'>Groups</Dropdown.Item>
			</DropdownButton>
			<Tournament />
            <Birthdays />
		</div>
	);
}

export default Events;
