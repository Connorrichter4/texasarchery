import React from 'react';
import './Home.css';

import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
			<Carousel>
				<Carousel.Item>
					<img
						className='home-image'
						src='https://cdn.pixabay.com/photo/2019/05/11/10/38/archery-4195456_640.jpg'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>Intro to Archery Classes</h3>
						<p>Check out our intro to archery every wednesday.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='home-image'
						src='https://cdn.pixabay.com/photo/2014/12/20/09/26/archery-573771_960_720.jpg'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='home-image'
						src='https://cdn.pixabay.com/photo/2015/01/17/11/32/archery-602125_960_720.jpg'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
}

export default Home;