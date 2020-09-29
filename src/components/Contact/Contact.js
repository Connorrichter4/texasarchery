import React, { useState, useEffect } from 'react';

import { Redirect } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import './Contact.css';

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: '',
		phone: '',
	});

	const [show, setShow] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...contact }),
		})
			.then(setShow(true))
			.catch((error) => alert(error));
	};

	const handleAlertClose = () => {
		setShow(false);
		setSuccess(true);
	}

	if(success){
		return <Redirect to='/' />
	}

	return (
		<div className='contact-us'>
			<Alert show={show} variant='success'>
				<Alert.Heading>Message Sent!</Alert.Heading>
				<p>
					Your message has been sent. We will email you shortly.
				</p>
				<hr />
				<div className='d-flex justify-content-end'>
					<Button onClick={handleAlertClose} variant='outline-success'>
						Back to homepage!
					</Button>
				</div>
			</Alert>
			<form
				className='contact-form'
				onSubmit={handleSubmit}
				method='POST'
				name='contact'>
				<input type='hidden' name='form-name' value='contact' />
				{/* <h2>Contact Us:</h2> */}
				<div className='input-fields'>
					<input
						className='input'
						type='text'
						name='name'
						onChange={handleChange}
						value={contact.name}
						placeholder='Name'
					/>

					<input
						className='input'
						type='email'
						name='email'
						onChange={handleChange}
						value={contact.email}
						placeholder='Email'
					/>
					<input
						className='input'
						type='phone'
						name='phone'
						onChange={handleChange}
						value={contact.phone}
						placeholder='Phone Number'
					/>
				</div>
				<div className='message-input'>
					<textarea
						name='message'
						onChange={handleChange}
						value={contact.message}
						placeholder='Message'></textarea>
					<div className='submit-btn' onClick={handleSubmit}>
						Send
					</div>
				</div>
			</form>
		</div>
	);
}

export default Contact;
