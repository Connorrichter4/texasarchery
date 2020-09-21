import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
			<footer className='footer'>
				<div className='footer-left'>
					<a href='http://texasarchery.info/staff-login' className='footer-links'>Staff Login</a>
					<Link to='/contact' className='footer-links'>Contact Us</Link>
					<p>Copyright &copy; 2020 TexasArchery.info - All Rights Reserved</p>
				</div>
				<div>
					<h3>Hours of Operation</h3>
					<p>Monday - Friday 3:00pm - 8:00pm</p>
					<p>Saturday - Sunday 9:00am - 6:00pm</p>
				</div>
			</footer>
		);
}

export default Footer;