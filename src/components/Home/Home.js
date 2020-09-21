import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Carousel from 'react-bootstrap/Carousel';

const carouselItems = [
	{
		id: 1,
		imgSrc:
			'https://cdn.pixabay.com/photo/2019/05/11/10/38/archery-4195456_640.jpg',
		title: 'Intro To Archery',
		info: 'Check out our intro to archery every wednesday.',
		link: '/classes',
	},
	{
		id: 2,
		imgSrc:
			'https://cdn.pixabay.com/photo/2014/12/20/09/26/archery-573771_960_720.jpg',
		title: 'Tournaments',
		info: 'Check out our monthly competitions.',
		link: '/events',
	},
	{
		id: 3,
		imgSrc:
			'https://cdn.pixabay.com/photo/2015/01/17/11/32/archery-602125_960_720.jpg',
		title: 'Outdoor Locations',
		info: 'Check out all of our outdoor locations.',
		link: '/locations',
	},
];

function Home() {
	return (
		<Carousel>
			{carouselItems.map((item) => {
				return (
					<Carousel.Item key={item.id}>
						<img className='home-image' src={item.imgSrc} alt='First slide' />
						<Link to={item.link} className='home-link'>
							<Carousel.Caption className='caption'>
								<h3 className='caption-text'>{item.title}</h3>
								<p className='caption-text'>{item.info}</p>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default Home;
