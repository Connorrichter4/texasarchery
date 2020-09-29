import React, { useState, useEffect } from 'react';

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

	// const [emailSent, setEmailSent] = useState(false);

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
			.then(() => alert('Success!'))
			.catch((error) => alert(error));
	};

	return (
		<div className='contact-us'>
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
					<div className='submit-btn'>Send</div>
				</div>
			</form>
		</div>
	);
}

export default Contact;
