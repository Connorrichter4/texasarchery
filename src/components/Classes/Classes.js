import React from 'react';
import './Classes.css';

import Card from 'react-bootstrap/Card';

const classCards = [
	{
		name: 'Intro to Archery',
		description:
			'Learn to shoot and be safe on a range! Free to new members within the first month of joining. Please sign up 15 minutes before class. Class size is limited to 15 students.',
		schedule: 'Every Saturday at 11:00 am',
		cost: '$15.00 per person',
		ages: 'Ages 9+',
	},
	{
		name: 'Archery 101',
		description:
			'Monthly session with weekly work out, and optional discounted private lessons, where students work through the Archers Quest rank advancements. Program prepares for equipment choices and develops a competitive, educated archer!',
		schedule: 'Every Monday, Wednesday, and Saturday',
		cost: '$75.00 per person',
		ages: 'Ages 9+',
	},
	{
		name: 'Archery 201',
		description: 'this is where the description will go',
		schedule: 'times that this class meets',
		cost: '$100.00 per person',
	},
	{
		name: 'Private Lessons',
		description:
			'Our authorized instructors have been background screened by USA Archery, and successfully completed the Safe Sport training program; a United States Olympic Committee requirement for all USA Archery coaches. Authorized Instructor list or ask the front counter to discuss your lesson needs.',
		cost: '$50.00 per person',
	},
];

function Classes() {
	return (
		<div className='class-card'>
			{classCards.map((item, index) => {
				return (
					<Card
						style={{
							width: '18rem',
							margin: '1rem auto 0',
							background: '#fffcf2',
							boxShadow: '0 0 15px #403d39',
						}}
						key={index}>
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>
								{item.description}
								<br />
								{item.schedule}
								<br />
								<strong>{item.cost}</strong>
								<br />
								<strong>{item.ages}</strong>
							</Card.Text>
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
}

export default Classes;
