import React, { useEffect } from 'react';
import './Locations.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const locationItems = [
	{
		name: 'Elm Fork',
		id: 'Elm-Fork',
		description:
			'Elm Fork Archery range consists of several 3d trails, an instructional area, a broadhead range, a practice range, and a long distance / FITA range.',
		hours:
			'Wednesday - Friday 12:00pm - 6:00pm, Saturday - Sunday 9:00am - 6:00pm',
		notice:
			'Members must wear membership card. No loaner equipment available.  No minors without parent. BROADHEAD POINTS ONLY ALLOWED ON BROADHEAD RANGE. ',
		address: '10751 Luna Road, Dallas, TX 75220',
		access: 'No gate code is needed.',
	},
	{
		name: 'Plano Archery Range',
		id: 'plano-range',
		description:
			'Plano range is a 30,000 sf indoor training facility that consists of multiple 10yd and 20yd ranges.',
		hours:
			'Monday - Friday 3:00pm - 8:00pm, Saturday - Sunday 9:00am - 6:00pm.',
		address: '600 Accent Dr, #B Plano, TX 75075',
	},
	{
		name: 'Rockwall Archery Range',
		id: 'rockwall-range',
		description:
			'Rockwall range consists of a 50yd practice range with a 15 lane wooded 3d course.',
		hours: 'Wednesday - Saturday 9:00am - 6:00pm, Sunday 11:00am - 6:00pm.',
		notice:
			'No guests or public allowed. Members must wear membership card at all times and check in at pro shop before accessing the ranges. No loaner equipment will be available.  No minors without parent. No public access or gun range access allowed. No broadhead use on any targets.',
		address: '15950 State Hwy 205, Terrell TX 75160',
		access: 'No gate code is needed.',
	},
	{
		name: 'Schroeder Range',
		id: 'Schroeder-range',
		description:
			'Schroeder range is a static long distance range with an optional elevated platform.',
		hours: 'Open daylight hours',
		notice:
			'Member access only. No guests or public allowed. Must wear membership badge at all times. No loaner equipment will be available. No minors without parent. Static long distance range. No broadhead use on any targets.',
		address: '12511 Schroeder Road, Dallas, TX 75243',
		access: 'Gate code is needed.',
	},
];

function Locations() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<div className='location-container'>
				<h2 className='page-title'>Locations</h2>
				<DropdownButton title='Select Location' variant='' className='dropdown'>
					{locationItems.map((item, index) => {
						return (
							<Dropdown.Item href={`#${item.id}`} key={index}>
								{item.name}
							</Dropdown.Item>
						);
					})}
					<Dropdown.Item href='#map'>Map</Dropdown.Item>
				</DropdownButton>
				{locationItems.map((item, index) => {
					return (
						<div key={index} className='location-item' id={`${item.id}`}>
							<h4>{item.name}</h4>
							<p>{item.description}</p>
							{item.hours ? <p>Hours: {item.hours}</p> : ''}
							{item.notice ? <p>Notice: {item.notice}</p> : ''}
							{item.address ? <p>Address: {item.address}</p> : ''}
							{item.access ? <p>Access: {item.access}</p> : ''}
						</div>
					);
				})}
			</div>
			<div className='image-container'>
				<img
					src='http://texasarchery.info/wp-content/uploads/2020/05/image003.png'
					alt='range locations'
					id='map'
					className='map-image'
				/>
			</div>
		</div>
	);
}

export default Locations;
