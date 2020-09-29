import React, { useEffect } from 'react';
import './Classes.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const classItems = [
	{
		name: 'Intro to Archery',
		id: 'intro',
		description:
			'Learn to shoot and be safe on a range! Free to new members within the first month of joining. Please sign up 15 minutes before class. Class size is limited to 15 students.',
		schedule: 'Every Saturday at 11:00 am',
		cost: '$15.00 per person',
		ages: 'Ages 9+',
	},
	{
		name: 'Archery 101',
		id: 'archery-101',
		description:
			'Monthly session with weekly work out, and optional discounted private lessons, where students work through the Archers Quest rank advancements. Program prepares for equipment choices and develops a competitive, educated archer!',
		schedule: 'Every Monday, Wednesday, and Saturday',
		cost: '$75.00 per person',
		ages: 'Ages 9+',
	},
	{
		name: 'Archery 201',
		id: 'archery-201',
		description:
			'Monthly session with weekly work out, and optional discounted private lessons, where students work through the Archers Quest rank advancements. Program builds upon Archery 101, and prepares archers for indoor and outdoor competitions.',
		schedule: 'Every Monday, Wednesday, and Saturday',
		cost: '$100.00 per person',
	},
	{
		name: 'Private Lessons',
		id: 'private',
		description:
			'Our authorized instructors have been background screened by USA Archery, and successfully completed the Safe Sport training program; a United States Olympic Committee requirement for all USA Archery coaches. Authorized Instructor list or ask the front counter to discuss your lesson needs.',
		cost: '$50.00 per person',
	},
];

function Classes() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='class-container'>
			<h2 className='page-title'>Classes</h2>
			<DropdownButton title='Select Class' variant='' className='dropdown'>
				{classItems.map((item, index) => {
					return (
						<Dropdown.Item href={`#${item.id}`} key={index}>
							{item.name}
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
			{classItems.map((item, index) => {
				return (
					<div key={index} className='class-item' id={`${item.id}`}>
						<h4>{item.name}</h4>
						<p>{item.description}</p>
						{item.schedule ? <p>Date: {item.schedule}</p> : ''}
						{item.cost ? <p>Cost: {item.cost}</p> : ''}
					</div>
				);
			})}
		</div>
	);
}

export default Classes;
