import React from 'react';

const tournamentList = [
	{
		title: 'USA Collegiate Invite',
		description:
			'USA Archery’s Collegiate Archery Program is for students enrolled in a college or university. Eligible participants can work to develop fundamental skills, compete for individual and national team championships and also earn Academic and All- American awards. Collegiate Archery Programs can be varsity teams with scholarships, club sports or student organizations on campus. Archery provides students a community with friendships that last a lifetime. This community helps with the stresses and pressures of rigorous academic pursuits, giving college students the perfect outlet.',
		date: '10/8 - 10/21',
	},
	{
		title: 'Texas Archery Indoor League',
		description:
			'Texas Archery Indoor League (TAIL) shoots serve as an official USA Archery Star Pin achievement testing and skill evaluation competition for JOAD & AAA programs (see award pins below, must be enrolled in USA Archery program to receive White pin or higher).  You compete against yourself to earn your next Star Pin award.',
		date: '10/25',
		cost: '$15.00',
		info:
			'http://texasarchery.info/wp-content/uploads/2020/01/Tail-Flyer-791x1024.jpg',
	},
	{
		title: 'Halloween Candy Shoot',
		description:
			'Shoot for your candy! We supply all the equipment for a family fun shoot! Crazy targets and activities to provide your gremlins a fun, safe, Halloween experience! Costumes invited!',
		date: '10/31',
	},
	{
		title: 'Shoot Your Way Across Texas',
		description:
			'This is a state wide "league" held primarily during the winter (October - February). Tournaments are hosted by various shops or clubs around the state. Any archer can compete in the events but you must be a NFAA/TFAA Member to compete for the SYWAT Aggregate/Tour Champion award. N.F.A.A. divisions and shooting styles will be in effect.',
		date: '11/21-11/22 ',
		info: 'https://texasfieldarchery.org/sywat/indoor',
	},
];

function Tournaments() {
	return (
		<div id='tournament'>
			<h3 className='event-title'>Tournaments</h3>
			{tournamentList.map((item, index) => {
				return (
					<div key={index} className='event-item'>
						<h4>{item.title}</h4>
						<p>{item.description}</p>
						{item.date ? <p>Date: {item.date}</p>: ''}
						<p>{item.cost}</p>
						{item.info ? (
							<a href={item.info} target='_blank' rel='noopener noreferrer'>
								More Info
							</a>
						) : (
							''
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Tournaments;
